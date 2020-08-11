import { Component, OnInit } from '@angular/core';
import { ICard, Card } from 'src/models/ScryfallApi';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.page.html',
  styleUrls: ['./random-card.page.scss'],
})
export class RandomCardPage implements OnInit {
  public card: ICard;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.card = this.router.getCurrentNavigation().extras.state.card;
      } else {
        this.card = new Card();
      }
    });
  }

  ngOnInit() {}
}
