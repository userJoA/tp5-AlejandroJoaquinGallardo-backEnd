import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http:HttpClient) { }

  Url:string="http://localhost:3000/api/";

  getTickets(): Observable<any>{
    let httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams()
    }
    return this._http.get(this.Url+"ticket",httpOptions);
  }

  getTicketsPorCategoria(categoria:string): Observable<any>{
    let httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams().append("categoriaEspectador",categoria)
    }
    return this._http.get(this.Url+"ticket",httpOptions);
  }

  deleteTicket(id:string): Observable<any>{
    let httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams().append("id",id)
    }
    return this._http.delete(this.Url+"ticket",httpOptions);
  }
  
}

