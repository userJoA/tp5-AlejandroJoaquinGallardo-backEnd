import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http:HttpClient) { }

  Url:string="http://localhost:3000/api/";

  getTransacciones(): Observable<any>{
    let httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams()
    }
    return this._http.get(this.Url+"transaccion",httpOptions);
  }

  getTransaccionesEmail(email:string):Observable<any>{
    let httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams().append('emailCliente',email)
    }
    return this._http.get(this.Url+"transaccion",httpOptions);
  }


  getTransaccionesMonedas(monedaOrigen:string,monedaDestino:string):Observable<any>{
    let httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams().append('monedaOrigen',monedaOrigen).append('monedaDestino',monedaDestino)
    }
    return this._http.get(this.Url+"transaccion",httpOptions);
  }

  crearTransaccion(ticket:Ticket) : Observable<any>{
    let httpOptions = {
       headers : new HttpHeaders(
        {
          "Content-Type": "application/json"
        }
      ),
      params:new HttpParams()
    }
    let body= JSON.stringify(ticket);
    return this._http.post(this.Url+"transaccion/",body, httpOptions);
  }
}
