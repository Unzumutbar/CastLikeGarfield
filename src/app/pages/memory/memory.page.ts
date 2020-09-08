import { Component, OnInit } from '@angular/core';
import { ICard, ICardList } from 'src/app/shared/models';
import { ModalController } from '@ionic/angular';
import { StorageProvider } from 'src/app/services/storage-provider.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.page.html',
  styleUrls: ['./memory.page.scss'],
})
export class MemoryPage implements OnInit {
  private _cards: ICard[];

  public get cards(): ICard[] {
    if (!this._cards || !this._cards) {
      return [];
    }

    return this._cards.filter((c) => c.image_uris && c.image_uris.png);
  }
  constructor(
    private storage: StorageProvider,
    private modalController: ModalController,
    private notify: NotificationService
  ) {}

  public async ngOnInit() {}

  public async ionViewWillEnter() {
    const spinner = await this.notify.showSpinnerLoadingData();
    try {
      this._cards = await this.storage.getCastSpells();
    } finally {
      spinner.hide();
    }
  }

  public async onTraumatize() {
    const spinner = await this.notify.showSpinnerLoadingData();
    try {
      await this.storage.resetCastSpells();
      this._cards = await this.storage.getCastSpells();
    } finally {
      spinner.hide();
    }
  }
}
