import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http:HttpClient) { }

  Url:string="http://localhost:3000/api/"

  getproductos(): Observable<any>{
    let httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams()
    }

    return this._http.get(this.Url+"producto",httpOptions);
  }

  crearProducto(producto:Producto) : Observable<any>{
    let httpOptions = {
       headers : new HttpHeaders(
        {
          "Content-Type": "application/json"
        }
      ),
      params:new HttpParams()
    }
    let body= JSON.stringify(producto);
    return this._http.post(this.Url+"producto/",body, httpOptions);
  }

}
