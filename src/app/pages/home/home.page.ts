import { Component } from '@angular/core';
import { ScryfallService } from '../../services/scryfall.service';
import { Router, NavigationExtras } from '@angular/router';
import { IMana, manaIcons } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title = 'Cast like Garfield';
  private _manaCost: IMana[];
  private _genericManaList: IMana[];
  private _xManaList: IMana[];

  public get manaCost(): IMana[] {
    if (!this._manaCost) {
      return [];
    }

    return this._manaCost.sort((n1, n2) => {
      if (n1.Order > n2.Order) {
        return 1;
      }
      if (n1.Order < n2.Order) {
        return -1;
      }
      return 0;
    });
  }

  constructor(public scryfall: ScryfallService, public router: Router) {
    this._manaCost = [];
    this.checkManaCost();
    this._genericManaList = this.getGenericManaList();
    this._xManaList = this.getXManaList();
  }

  public addMana(type: string) {
    this._manaCost.push(manaIcons[type]);
    this.checkManaCost();
  }

  public addGenericMana() {
    const genericMana = this._manaCost.filter((m) => this.manaIsGeneric(m));

    if (genericMana.length <= 0) {
      this._manaCost.push(manaIcons['one']);
    } else {
      this._manaCost = this._manaCost.filter((m) => !this.manaIsGeneric(m));
      let order = genericMana[0].Order;
      if (order < 16) {
        order += 1;
      }
      const nextGeneric = this._genericManaList.filter(
        (m) => m.Order === order
      )[0];
      this._manaCost.push(nextGeneric);
    }
  }

  public addXMana() {
    const xMana = this._manaCost.filter((m) => this.manaIsX(m));

    if (xMana.length <= 0) {
      this._manaCost.push(manaIcons['x']);
    } else if (xMana.length === 1) {
      this._manaCost.push(manaIcons['y']);
    } else if (xMana.length === 2) {
      this._manaCost.push(manaIcons['z']);
    }

    this.checkManaCost();
  }

  public removeMana(mana: IMana) {
    if (this.manaIsGeneric(mana)) {
      this.removeGenericMana();
      this.checkManaCost();
      return;
    }

    if (this.manaIsX(mana)) {
      this.removeXMana();
      this.checkManaCost();
      return;
    }

    const selectedMana = this._manaCost.filter((m) => m.Code === mana.Code);
    this._manaCost = this._manaCost.filter((m) => m.Code !== mana.Code);

    if (selectedMana.length > 1) {
      selectedMana.pop();
      selectedMana.forEach((m) => this._manaCost.push(m));
    }

    this.checkManaCost();
  }

  public removeGenericMana() {
    const genericMana = this._manaCost.filter((m) => this.manaIsGeneric(m));

    if (genericMana.length <= 0) {
      return;
    } else {
      this._manaCost = this._manaCost.filter((m) => !this.manaIsGeneric(m));
      let order = genericMana[0].Order;
      if (order > 1) {
        order -= 1;
        const nextGeneric = this._genericManaList.filter(
          (m) => m.Order === order
        )[0];
        this._manaCost.push(nextGeneric);
      }
    }
  }

  public removeXMana() {
    const xMana = this._manaCost.filter((m) => this.manaIsX(m));

    if (xMana.length === 1) {
      this._manaCost = this._manaCost.filter(
        (m) => m.Order !== manaIcons['x'].Order
      );
    } else if (xMana.length === 2) {
      this._manaCost = this._manaCost.filter(
        (m) => m.Order !== manaIcons['y'].Order
      );
    } else if (xMana.length === 3) {
      this._manaCost = this._manaCost.filter(
        (m) => m.Order !== manaIcons['z'].Order
      );
    }
  }

  private manaIsGeneric(mana: IMana): boolean {
    return this._genericManaList.includes(mana);
  }

  private manaIsX(mana: IMana): boolean {
    return this._xManaList.includes(mana);
  }

  public getCards() {
    this.scryfall.getCardsByCost(this.manaCost).subscribe((cardList) => {
      if (cardList) {
        let navigationExtras: NavigationExtras = {
          state: {
            cardList: cardList,
          },
        };
        this.router.navigate(['card-list'], navigationExtras);
      }
    });
  }

  public getRandomCard() {
    this.scryfall.getRandomCardByCost(this.manaCost).subscribe((card) => {
      if (card) {
        let navigationExtras: NavigationExtras = {
          state: {
            card: card,
          },
        };
        this.router.navigate(['random-card'], navigationExtras);
      }
    });
  }

  public getGenericManaList(): IMana[] {
    const genericList = [];

    genericList.push(manaIcons['zero']);
    genericList.push(manaIcons['one']);
    genericList.push(manaIcons['two']);
    genericList.push(manaIcons['three']);
    genericList.push(manaIcons['four']);
    genericList.push(manaIcons['five']);
    genericList.push(manaIcons['six']);
    genericList.push(manaIcons['seven']);
    genericList.push(manaIcons['eight']);
    genericList.push(manaIcons['nine']);
    genericList.push(manaIcons['ten']);
    genericList.push(manaIcons['eleven']);
    genericList.push(manaIcons['twelve']);
    genericList.push(manaIcons['thirteen']);
    genericList.push(manaIcons['fourteen']);
    genericList.push(manaIcons['fifteen']);
    genericList.push(manaIcons['sixteen']);

    return genericList;
  }

  public getXManaList(): IMana[] {
    const xList = [];

    xList.push(manaIcons['x']);
    xList.push(manaIcons['y']);
    xList.push(manaIcons['z']);

    return xList;
  }

  private checkManaCost() {
    const zeroManaIcon = manaIcons['zero'];
    if (this._manaCost.length === 0) {
      this._manaCost.push(zeroManaIcon);
    } else {
      this._manaCost = this._manaCost.filter((m) => m !== zeroManaIcon);
    }
  }
}
