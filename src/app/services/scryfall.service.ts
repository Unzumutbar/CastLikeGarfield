import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpHeaders,
  HttpClient,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IMana, ICardList, ICard } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ScryfallService {
  // API path
  base_path = 'https://api.scryfall.com';

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private createSearchFilterFromCost(cost: IMana[]): string {
    let filter = 'mana%3A';
    let cmc = 0;
    cost.forEach((m) => {
      filter += m.Code;
      cmc += m.CMC;
    });

    filter += '+cmc%3D' + cmc.toString();

    return filter;
  }

  public getCardsByCost(cost: IMana[]): Observable<ICardList> {
    const filter = this.createSearchFilterFromCost(cost);
    return this.http
      .get<ICardList>(this.base_path + '/cards/search?q=' + filter)
      .pipe(retry(2), catchError(this.handleError));
  }

  public getRandomCardByCost(cost: IMana[]): Observable<ICard> {
    const filter = this.createSearchFilterFromCost(cost);
    return this.http
      .get<ICard>(this.base_path + '/cards/random?q=' + filter)
      .pipe(retry(2), catchError(this.handleError));
  }
}
