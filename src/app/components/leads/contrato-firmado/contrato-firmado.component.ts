import { Component } from '@angular/core';
import { LeadApiService } from 'src/app/services/lead-api.service';

@Component({
  selector: 'app-contrato-firmado',
  templateUrl: './contrato-firmado.component.html',
  styleUrls: ['./contrato-firmado.component.scss']
})
export class ContratoFirmadoComponent {
  ListaLeads:any[]=[];
  constructor(private leadApiService:LeadApiService) {
    this.leadApiService.getLeadsContrato().subscribe((data:any[])=>{
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
