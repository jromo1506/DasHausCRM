import { Component } from '@angular/core';
import { InventarioApiService } from 'src/app/services/inventario-api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ver-inventario',
  templateUrl: './ver-inventario.component.html',
  styleUrls: ['./ver-inventario.component.scss']
})
export class VerInventarioComponent {

  arrInventarios:any[]=[];

  constructor(private inventarioApi:InventarioApiService,private router:Router){
    

  }

  ngOnInit(){
    this.inventarioApi.getInventorys().subscribe(data=>{
        this.arrInventarios = data;
        console.log(this.arrInventarios,"INV");
    });
  }

  selectaInventario(id:string){
    alert(id);
    this.router.navigate(['dashboard/infoInventario', id]);
  }



}
