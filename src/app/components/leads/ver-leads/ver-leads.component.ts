import { Component } from '@angular/core';
import { LeadApiService } from 'src/app/services/lead-api.service';

@Component({
  selector: 'app-ver-leads',
  templateUrl: './ver-leads.component.html',
  styleUrls: ['./ver-leads.component.scss']
})
export class VerLeadsComponent {
  ListaLeads:any[]=[];
  constructor(private leadApiService:LeadApiService){
    this.leadApiService.getLeads().subscribe((data:any[])=>{
      this.ListaLeads = data;
      // alert("Exito");
      console.log(this.ListaLeads,"LISTA LEADS");
   },error=>{
    // alert("Error");
   });

  }

  ngOnInit():void{

    
  }

}
