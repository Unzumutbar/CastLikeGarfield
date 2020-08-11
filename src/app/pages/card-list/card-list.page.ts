import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardList, ICardList, ICard } from 'src/models/ScryfallApi';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {
  private _cardList: ICardList;

  public get cards(): ICard[] {
    if (!this._cardList || !this._cardList.data) {
      return [];
    }

    return this._cardList.data.filter((c) => c.image_uris && c.image_uris.png);
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this._cardList = this.router.getCurrentNavigation().extras.state.cardList;
      } else {
        this._cardList = new CardList();
      }
    });
  }

  ngOnInit() {}
}
