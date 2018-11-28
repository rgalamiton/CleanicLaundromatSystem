import { Injectable } from '@angular/core';
import { Details } from '../shared/details.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from './inventory.model';


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
  private _url2 = "http://localhost:54907/api/InventoryLists";
  
  
  constructor(private http: HttpClient) { }
  
  postService(data: Details): Observable<Details> {
    return this.http.post<Details>(this._url, data, httpOptions);
  }

  postInventory(data: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(this._url2, data, httpOptions);
  }

  getSelfService(): Observable<Details[]>{
    return this.http.get<Details[]>(this._url);
  }

  getInventory(): Observable<Inventory[]>{
    return this.http.get<Inventory[]>(this._url2);
  }

  deleteService(id: number): Observable<{}>{
    const url = this._url + '/' + id;
    return this.http.delete(url, httpOptions);
  }

  deleteInventory(id: number): Observable<{}>{
    const url = this._url2 + '/' + id;
    return this.http.delete(url, httpOptions);
  }


 /* updateService(data: Details): Observable<Details> {
    const url = this._url + '/' + id;
    return this.http.put<Details>(this._url, data, httpOptions);
  }

  */

}
