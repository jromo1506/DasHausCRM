import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventarioApiService } from 'src/app/services/inventario-api.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-inventario-form',
  templateUrl: './inventario-form.component.html',
  styleUrls: ['./inventario-form.component.scss']
})
export class InventarioFormComponent implements OnInit{
  inventarioForm: FormGroup;
  cred:any;

  arrColindancias:any[]=[];


  constructor(
    private formBuilder: FormBuilder,
    private apiInventario:InventarioApiService,
    private login:LoginServiceService) { 
   
   
    this.inventarioForm = this.formBuilder.group({
      manzana: ['', Validators.required],
      lote: ['', Validators.required],
      metros: ['', Validators.required],
      opcion: ['', Validators.required],
      opcionRadio: ['', Validators.required],
      medidas: ['', Validators.required],
      precioVenta: ['', Validators.required],
      medidasTerreno: ['', Validators.required],
      terrenosComercial: ['', Validators.required]
    });

    this.cred = this.login.getCredentials();

  }

  ngOnInit(): void {
   
  }

  onSubmit() {
   var inventario_id = "";
    var inventario = {
      id_usuario:this.cred._id,
      manzana:this.inventarioForm.value.manzana,
      lote:this.inventarioForm.value.lote,
      metros:this.inventarioForm.value.metros,
      prototipo:this.inventarioForm.value.opcion,
      medidas:this.inventarioForm.value.medidas,
      precioVenta:this.inventarioForm.value.precioVenta,
      colindancias:[]
    }
    
    this.apiInventario.addInventory(inventario).subscribe((res:any)=>{
      console.log(res,"Respuesta servidor");
      inventario_id = res._id;
      this.registradorColindancias(inventario_id);

    });

 
  }

  registradorColindancias(id_inv:string){
    this.arrColindancias.forEach(colin=>{
      colin.id_inventario=id_inv;
      this.apiInventario.addColindancia(colin).subscribe((res:any)=>{
        console.log(res,"respuesta colin");
      })
    });
  }

  asignadorColindancias(id_inventario:string){

    // var obj = {
    //   idInventario:id_inventario;
    // }
    
    // this.apiInventario.asignarColindanciasArray();
  }

  onSubmitColindancia(){
    var colin = {
      id_inventario:"",
      manzana:this.inventarioForm.value.manzana,
      lote:this.inventarioForm.value.lote,
      metros:this.inventarioForm.value.metros,
      direccion:this.inventarioForm.value.opcionRadio,
    }
    this.arrColindancias.push(colin);
    this.colocadorDeColindancias(colin);
  }






colocadorDeColindancias(colin:any){
      // Crear la estructura de elementos
    const divColindancia = document.createElement('div');
    divColindancia.classList.add('colindancia', 'w-75', 'p-1');

    const divFlex = document.createElement('div');
    divFlex.classList.add('flex-sa');

    const divManzana = document.createElement('div');
    const pManzana = document.createElement('p');
    pManzana.textContent = 'Manzana:'+ colin.manzana;
    divManzana.appendChild(pManzana);

    const divLote = document.createElement('div');
    divLote.classList.add('ml-5');
    const pLote = document.createElement('p');
    pLote.textContent = 'Lote:'+colin.lote;
    divLote.appendChild(pLote);

    const divNorte = document.createElement('div');
    divNorte.classList.add('ml-4');
    const pNorte = document.createElement('p');
    pNorte.textContent = 'Norte:' + colin.direccion;
    divNorte.appendChild(pNorte);

    const divMetros = document.createElement('div');
    divMetros.classList.add('ml-4');
    const pMetros = document.createElement('p');
    pMetros.textContent = 'Metros:'+ colin.metros;
    divMetros.appendChild(pMetros);

    // Adjuntar los elementos en la estructura correcta
    divFlex.appendChild(divManzana);
    divFlex.appendChild(divLote);
    divFlex.appendChild(divNorte);
    divFlex.appendChild(divMetros);

    divColindancia.appendChild(divFlex);

    // Obtener el div donde se desea hacer appendChild
    const divPadre = document.getElementById('contColindancias') as HTMLDivElement; // Reemplaza 'divPadre' con el ID de tu div padre

    // Hacer appendChild
    divPadre.appendChild(divColindancia);
  }


 
}


