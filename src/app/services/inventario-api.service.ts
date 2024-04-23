import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalApiService } from './global-api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventarioApiService {

  constructor(private http:HttpClient,private api:GlobalApiService) { }



  addInventory(inv:any):Observable<any>{
    console.log(inv,"Add Inventario");
    return this.http.post(this.api.getApiURL() + "/addInventario",inv);
  }

  getInventorys():Observable<any>{
    return this.http.get(this.api.getApiURL() + "/getInventarios");
  }

  
  getInventarioById(id: string): Observable<any> {
    return this.http.get(this.api.getApiURL() +"/getInventarioPorId/" +id);
  }

  addColindancia(col:any):Observable<any>{
    return this.http.post(this.api.getApiURL() + "/addColindancia",col);
  }

  asignarColindanciasArray(arr:any):Observable<any>{
    return this.http.put(this.api.getApiURL() + "/putColindancias",arr);
  }

  getColindanciasById(id:string):Observable<any>{
    return this.http.get(this.api.getApiURL() + "/getColindanciasPorId/"+id);
  }

  


  






  




}
