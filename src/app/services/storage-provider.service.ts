import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ICard } from '../shared/models';

@Injectable()
export class StorageProvider {
  private readonly _castSpellsKey = 'castSpells';

  constructor(private storage: Storage) {}

  public async setCastSpells(castSpells: ICard[]) {
    await this.storage.set(this._castSpellsKey, JSON.stringify(castSpells));
  }

  public async getCastSpells(): Promise<ICard[]> {
    const cardsString = await this.storage.get(this._castSpellsKey);
    if (!cardsString) {
      return [];
    }

    return JSON.parse(cardsString) as ICard[];
  }

  public async addCastSpells(card: ICard) {
    const castSpells = await this.getCastSpells();
    if (castSpells.some((c) => c.name === card.name)) {
      return;
    }

    castSpells.push(card);
    await this.setCastSpells(castSpells);
  }

  public async resetCastSpells() {
    await this.storage.remove(this._castSpellsKey);
  }
}
