import { Component } from '@angular/core';
import { Observable,Subject } from 'rxjs';import { HeaderControlsService } from 'src/app/services/header-controls.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  seleccion:string = "";

  constructor(private headerControl:HeaderControlsService){}

  ngOnInit(){
    this.headerControl.headerControl$.subscribe((selec:any)=>{
      // alert(selec);
      this.seleccion = selec;
    });
  }

}
