export interface IImageUri {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}

export interface Legalities {
  standard: string;
  future: string;
  historic: string;
  pioneer: string;
  modern: string;
  legacy: string;
  pauper: string;
  vintage: string;
  penny: string;
  commander: string;
  brawl: string;
  duel: string;
  oldschool: string;
}

export interface Prices {
  usd: string;
  usd_foil: string;
  eur: string;
  tix: string;
}

export interface RelatedUris {
  gatherer: string;
  tcgplayer_decks: string;
  edhrec: string;
  mtgtop8: string;
}

export interface PurchaseUris {
  tcgplayer: string;
  cardmarket: string;
  cardhoarder: string;
}

export interface Preview {
  source: string;
  source_uri: string;
  previewed_at: string;
}

export interface AllPart {
  object: string;
  id: string;
  component: string;
  name: string;
  type_line: string;
  uri: string;
}

export interface CardFace {
  object: string;
  name: string;
  mana_cost: string;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  artist: string;
  artist_id: string;
  illustration_id: string;
  flavor_text: string;
}

export interface ICard {
  // object: string;
  id: string;
  // oracle_id: string;
  // multiverse_ids: number[];
  // tcgplayer_id: number;
  name: string;
  lang: string;
  // released_at: string;
  // uri: string;
  // scryfall_uri: string;
  // layout: string;
  // highres_image: boolean;
  image_uris: IImageUri;
  mana_cost: string;
  cmc: number;
  // type_line: string;
  oracle_text: string;
  // power: string;
  // toughness: string;
  // colors: string[];
  //color_identity: string[];
  // keywords: string[];
  // legalities: Legalities;
  // games: string[];
  // reserved: boolean;
  // foil: boolean;
  // nonfoil: boolean;
  // oversized: boolean;
  // promo: boolean;
  // reprint: boolean;
  // variation: boolean;
  // set: string;
  // set_name: string;
  // set_type: string;
  // set_uri: string;
  // set_search_uri: string;
  // scryfall_set_uri: string;
  // rulings_uri: string;
  // prints_search_uri: string;
  // collector_number: string;
  // digital: boolean;
  // rarity: string;
  // card_back_id: string;
  // artist: string;
  // artist_ids: string[];
  // illustration_id: string;
  // border_color: string;
  // frame: string;
  // full_art: boolean;
  // textless: boolean;
  // booster: boolean;
  // story_spotlight: boolean;
  // edhrec_rank: number;
  // prices: Prices;
  // related_uris: RelatedUris;
  // purchase_uris: PurchaseUris;
  // mtgo_id?: number;
  // mtgo_foil_id?: number;
  // arena_id?: number;
  // flavor_text: string;
  // frame_effects: string[];
  // preview: Preview;
  // all_parts: AllPart[];
  // watermark: string;
  // card_faces: CardFace[];
  // promo_types: string[];
}

export interface ICardList {
  object: string;
  total_cards: number;
  has_more: boolean;
  next_page: string;
  data: ICard[];
}

export class CardList implements CardList {
  public object = '';
  public total_cards = 0;
  public has_more = false;
  public next_page = '';
  public data: ICard[];

  constructor() {
    this.data = [];
  }
}

export class Card implements ICard {
  public id: string;
  public name = '';
  public lang = '';
  public image_uris = new ImageUri();
  public mana_cost = '';
  public cmc = 0;
  public oracle_text = '';
}

export class ImageUri implements IImageUri {
  private placeHolder = '';
  public small = this.placeHolder;
  public normal = this.placeHolder;
  public large = this.placeHolder;
  public png = this.placeHolder;
  public art_crop = this.placeHolder;
  public border_crop = this.placeHolder;
}
