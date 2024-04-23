import { Component } from '@angular/core';
import { LeadApiService } from 'src/app/services/lead-api.service';

@Component({
  selector: 'app-firmado-entregada',
  templateUrl: './firmado-entregada.component.html',
  styleUrls: ['./firmado-entregada.component.scss']
})
export class FirmadoEntregadaComponent {
  ListaLeads:any[]=[];
  constructor(private leadApiService:LeadApiService) {
    this.leadApiService.getLeadsFirmado().subscribe((data:any[])=>{
      this.ListaLeads = data;
      console.log(this.ListaLeads,"LISTA LEADS");
   },error=>{
    // alert("Error");
   });

  }

  ngOnInit():void{

  }

  avanzarlead(id :any) : void{
    this.leadApiService.anvanzarLead(id).subscribe((data:any[])=>{
      alert("Exito");
      window.location.reload();
   },error=>{

   });
  }

}
