import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageProvider } from 'src/app/services/storage-provider.service';
import { ModalController, NavController } from '@ionic/angular';
import { CastSpellDialogPage } from 'src/app/dialogs/cast-spell-dialog/cast-spell-dialog.page';
import { ICardList, ICard, CardList, IMana } from 'src/app/shared/models';
import { NotificationService } from 'src/app/services/notification.service';
import { CheckStatus } from 'src/app/shared/enums';
import { ScryfallService } from 'src/app/services/scryfall.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {
  private readonly _castSpellsKey = 'castSpells';
  private cardList: CardList;
  public cards: ICard[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageProvider,
    private modalController: ModalController,
    private notify: NotificationService,
    private navCtrl: NavController,
    private scryfall: ScryfallService
  ) {
    this.cards = [];
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cardList = this.router.getCurrentNavigation().extras.state.cardList;
      }
    });
  }

  public async ngOnInit() {}

  public async ionViewWillEnter() {
    if (!this.cardList) {
      return;
    }

    const spinner = await this.notify.showSpinnerLoadingData();
    try {
      let cards = [];
      let cardList = this.cardList;
      cards = cards.concat(cardList.data);

      while (cardList.has_more) {
        cardList = await this.scryfall.getNextPage(cardList.next_page);
        cards = cards.concat(cardList.data);
      }
      cards = cards.filter((c) => c.image_uris && c.image_uris.png);

      const castSpells = await this.storage.getCastSpells();
      for (const spell of castSpells) {
        cards = cards.filter((c) => c.id != spell.id);
      }

      this.cards = cards;
    } finally {
      spinner.hide();
    }
  }

  public async castSpell(card: ICard) {
    await this.callCastSpellDialog(card, async (check) => {
      if (check === CheckStatus.Approve) {
        await this.storage.addCastSpells(card);
        this.goBack();
      }
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

  private goBack() {
    this.navCtrl.navigateBack('/home');
  }
}
