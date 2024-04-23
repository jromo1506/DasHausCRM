import { Component } from '@angular/core';
import { InventarioApiService } from 'src/app/services/inventario-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inventarios-info',
  templateUrl: './inventarios-info.component.html',
  styleUrls: ['./inventarios-info.component.scss']
})
export class InventariosInfoComponent {

  // NG MODELS
  manzana:string="";
  lote:string="";
  metros:string="";
  prototipo="";
  medidas:string="";
  precioVenta:string="";

  inventario:any;
  id:any;


  colindancias:any[]=[];
  constructor(private inventarioApiService:InventarioApiService,private route: ActivatedRoute){

    this.route.params.subscribe(params => {
      var id =params['id'];
    
      this.inventarioApiService.getInventarioById(id).subscribe((data:any)=>{
        this.inventario=data;
        console.log(this.inventario);
        this.manzana=data.manzana;
        this.lote=data.lote;
        this.metros=data.metros;
        this.prototipo=data.prototipo;
        this.medidas=data.medidas;
        this.precioVenta=data.precioVenta;
        
        this.inventarioApiService.getColindanciasById(data._id).subscribe((data2:any)=>{

          this.colindancias= data2;
          console.log(this.colindancias,"COLIN");
        });

      });
    });
   
    

      
  }


  

}
