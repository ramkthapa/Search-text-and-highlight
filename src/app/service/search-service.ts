import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SearchService {

  private baseUrl: string = `/api/v4/suggestion`;
  private headerOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('api@test.com'),
    })
  };

  constructor(private http: HttpClient) { }

  getSearchSuggestion(): Observable<any> {
        return this.http.get<any>(this.baseUrl, this.headerOptions).pipe(
          catchError(err => {
            console.log('Not able to featch search results');
            return throwError(err);
          })
        );
    }

}
