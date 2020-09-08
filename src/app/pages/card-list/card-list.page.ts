import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageProvider } from 'src/app/services/storage-provider.service';
import { ModalController } from '@ionic/angular';
import { CastSpellDialogPage } from 'src/app/dialogs/cast-spell-dialog/cast-spell-dialog.page';
import { ICardList, ICard, CardList } from 'src/app/shared/models';
import { NotificationService } from 'src/app/services/notification.service';
import { CheckStatus } from 'src/app/shared/enums';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {
  private _cardList: ICardList;
  private readonly _castSpellsKey = 'castSpells';

  public get cards(): ICard[] {
    if (!this._cardList || !this._cardList.data) {
      return [];
    }

    return this._cardList.data.filter((c) => c.image_uris && c.image_uris.png);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageProvider,
    private modalController: ModalController,
    private notify: NotificationService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this._cardList = this.router.getCurrentNavigation().extras.state.cardList;
      } else {
        this._cardList = new CardList();
      }
    });
  }

  public async ngOnInit() {}

  public async castSpell(card: ICard) {
    await this.callCastSpellDialog(card, async (check) => {
      const spinner = await this.notify.showSpinnerLoadingData();

      if (check === CheckStatus.Approve) {
        await this.storage.addCastSpells(card);
      }

      spinner.hide();
    });
  }

  private async callCastSpellDialog(
    card: ICard,
    callback: (s: CheckStatus) => any
  ): Promise<CheckStatus> {
    let result: CheckStatus = CheckStatus.Undefined;

    const modal = await this.modalController.create({
      component: CastSpellDialogPage,
      backdropDismiss: false,
      componentProps: {
        card,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        result = dataReturned.data as CheckStatus;
        callback(result);
      }
    });

    await modal.present();

    return result;
  }
}
