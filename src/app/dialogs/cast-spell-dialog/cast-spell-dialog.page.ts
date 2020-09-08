import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { CheckStatus } from 'src/app/shared/enums';
import { ICard } from 'src/app/shared/models';

@Component({
  selector: 'app-cast-spell-dialog',
  templateUrl: './cast-spell-dialog.page.html',
  styleUrls: ['./cast-spell-dialog.page.scss'],
})
export class CastSpellDialogPage implements OnInit {
  public card: ICard;

  public get cardTitle(): string {
    if (!this.card) {
      return 'Unnamed Card';
    }

    return this.card.name;
  }

  public get cardImage(): string {
    if (!this.card) {
      return 'blank';
    }

    return this.card.image_uris.png;
  }

  constructor(navParams: NavParams, private modalController: ModalController) {
    this.card = navParams.data.card;
  }

  public async ngOnInit() {}

  public onApprove() {
    this.closeModal(CheckStatus.Approve);
  }

  public onDismiss() {
    this.closeModal(CheckStatus.Dismiss);
  }
  public async closeModal(status: CheckStatus) {
    await this.modalController.dismiss(status);
  }
}
