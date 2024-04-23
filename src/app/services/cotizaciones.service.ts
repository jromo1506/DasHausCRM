import { Injectable } from '@angular/core';
import { GlobalApiService } from './global-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, finalize } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {

  constructor(private Api:GlobalApiService,private http:HttpClient) { }

  addCotizacion(cotizacion:any):Observable<any>{
    console.log(cotizacion,"cotizacion");
    return this.http.post(this.Api.getApiURL() + "/addCotizacion",cotizacion);
  }

  addMensualidad(mes:any):Observable<any>{
    return this.http.post(this.Api.getApiURL() + "/addMensualidad",mes);
  }


  

}
