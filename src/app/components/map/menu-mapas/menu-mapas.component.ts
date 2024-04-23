import { Component } from '@angular/core';
import { MapasService } from 'src/app/services/mapas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-menu-mapas',
  templateUrl: './menu-mapas.component.html',
  styleUrls: ['./menu-mapas.component.scss']
})
export class MenuMapasComponent {

  mapas:any[]=[];

  constructor(private mapasService:MapasService,private router:Router){
    this.mapasService.getMapas().subscribe( datos => {
        this.mapas = datos;
        console.log(this.mapas);
    });
  }


  crearMapa(){
    var input=document.getElementById("nombreMapa") as HTMLInputElement;
    const nombre = input.value;

  
    if (nombre === "" || /^\s+$/.test(nombre)) {
        Swal.fire({
          title: "Alerta",
          text: "Ingresa un nombre para el mapa",
          icon: "error"
        });
    } else {
      this.router.navigate(['/dashboard/mapa',nombre]);
    }
  }

  

eliminarMapa(idMapa:string){

  Swal.fire({
    title: "Seguro?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Eliminar",
    denyButtonText: `No eliminar`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.mapasService.deleteMapa(idMapa).subscribe(datos =>{
         Swal.fire("Exito", "Se elimino el mapa", "success");
      });
     
    } else if (result.isDenied) {
      
    }
  });
  
}


configurarMapa(idMapa:string){
  this.router.navigate(['/dashboard/mapa',"ConfigurarMapa",idMapa]);
}










  

}
