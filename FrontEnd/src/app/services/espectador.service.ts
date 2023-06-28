import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  constructor(private _http:HttpClient) { }

  Url:string="http://localhost:3000/api/"

  getEspectadores(): Observable<any>{
    let httpOptions={
      headers:new HttpHeaders(
        {

        }
      ),params: new HttpParams()
    }

    return this._http.get(this.Url+"espectador/",httpOptions);
  }
}
