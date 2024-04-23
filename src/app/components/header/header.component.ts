import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { HeaderControlsService } from 'src/app/services/header-controls.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Tipos de usuario
  // 0 - No se ha logueadod
  // 1 - Administrador
  // 2 - Tesorero
  // 3 - Tecnico
  // 4 - Vendedor
  userType:number=0;
  seleccion:string = "";
  cred:any;
  constructor(private loginService:LoginServiceService, private headerControl:HeaderControlsService){}


  ngOnInit(){
    this.cred = this.loginService.getCredentials();
    this.loginService.credenciales$.subscribe((credenciales:any) =>{
      this.userType = credenciales.type;
    })
    this.userType = this.cred.type;

    
  }


  hacerSeleccion(seleccion:string){
   
    this.headerControl.setHeaderControl(seleccion);
  }






  

}
