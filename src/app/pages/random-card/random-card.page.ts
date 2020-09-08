import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICard, Card } from 'src/app/shared/models';
import { StorageProvider } from 'src/app/services/storage-provider.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.page.html',
  styleUrls: ['./random-card.page.scss'],
})
export class RandomCardPage implements OnInit {
  public card: ICard;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageProvider,
    private navCtrl: NavController
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.card = this.router.getCurrentNavigation().extras.state.card;
      } else {
        this.card = new Card();
      }
    });
  }

  public async ngOnInit() {}

  public async onCast() {
    await this.storage.addCastSpells(this.card);
    this.goBack();
  }

  public async onNegate() {
    this.goBack();
  }

  private goBack() {
    this.navCtrl.navigateBack('/home');
  }
}
