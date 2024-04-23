import { Component } from '@angular/core';
import { LeadApiService } from 'src/app/services/lead-api.service';

@Component({
  selector: 'app-prospectos',
  templateUrl: './prospectos.component.html',
  styleUrls: ['./prospectos.component.scss']
})
export class ProspectosComponent {
  ListaLeads:any[]=[];
  constructor(private leadApiService:LeadApiService){
    this.leadApiService.getLeadsProspectos().subscribe((data:any[])=>{
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
