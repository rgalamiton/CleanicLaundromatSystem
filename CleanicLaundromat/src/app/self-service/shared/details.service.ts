import { Injectable } from '@angular/core';
import { Details } from '../shared/details.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  selectedService: Details;
  private _url = "http://localhost:54907/api/Self_service";
  
  constructor(private http: HttpClient) { }
  
  postService(data: Details): Observable<Details> {
    return this.http.post<Details>(this._url, data, httpOptions);
  }

  getSelfService(): Observable<Details[]>{
    return this.http.get<Details[]>(this._url);
  }

  deleteService(id: number): Observable<{}>{
    const url = this._url + '/' + id;
    return this.http.delete(url, httpOptions);
  }

 /* updateService(data: Details): Observable<Details> {
    const url = this._url + '/' + id;
    return this.http.put<Details>(this._url, data, httpOptions);
  }

  */

}
