import { Component } from '@angular/core';
import { LeadApiService } from 'src/app/services/lead-api.service';


@Component({
  selector: 'app-convertir-prospectos',
  templateUrl: './convertir-prospectos.component.html',
  styleUrls: ['./convertir-prospectos.component.scss']
})
export class ConvertirProspectosComponent {
  ListaLeads:any[]=[];
  
  constructor(private leadApiService:LeadApiService){
    this.leadApiService.getLeadsLeads().subscribe((data:any[])=>{
      this.ListaLeads = data;
      console.log(this.ListaLeads,"LISTA LEADSLEADS");
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
