import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

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

  getTicket(id:string): Observable<any>{
    let httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams()
    }
    return this._http.get(this.Url+"ticket/"+id,httpOptions);
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
      ),params: new HttpParams()
    }
    return this._http.delete(this.Url+"ticket/"+id,httpOptions);
  }


  createTicket(ticket:Ticket) : Observable<any>{
    let httpOptions = {
       headers : new HttpHeaders(
        {
          "Content-Type": "application/json"
        }
      ),
      params:new HttpParams()
    }
    let body= JSON.stringify(ticket);
    return this._http.post(this.Url+"ticket/",body, httpOptions);
  }

  modificarTicket(ticket:Ticket) : Observable<any>{
    let httpOptions = {
       headers : new HttpHeaders(
        {
          "Content-Type": "application/json"
        }
      ),
      params:new HttpParams()
    }
    let body= JSON.stringify(ticket);
    return this._http.put(this.Url+"ticket/"+ticket._id,body,httpOptions);
  }

}

