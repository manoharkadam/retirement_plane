import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiurl = 'api/retirementPlan';
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {} //Injecting HTTP service to communicate with the data

  private handleError(error: any) {
    console.error(error); //Created a function to handle and log errors, in case
    return throwError(error);
  }

  getData(): Observable<any> {
    return this.http.get(this.apiurl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }
}
