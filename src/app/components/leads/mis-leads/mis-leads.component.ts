import { Component } from '@angular/core';
import { LeadApiService } from 'src/app/services/lead-api.service';

@Component({
  selector: 'app-mis-leads',
  templateUrl: './mis-leads.component.html',
  styleUrls: ['./mis-leads.component.scss']
})
export class MisLeadsComponent {
  ListaLeads:any[]=[];
  constructor(private leadApiService:LeadApiService){
    var idcuenta = localStorage.getItem('accountId');
    this.leadApiService.getLeadsByVendor(idcuenta).subscribe((data:any[])=>{
      this.ListaLeads = data;
      
      console.log(this.ListaLeads,"LISTA LEADS");
   },error=>{
    // alert("Error");
   });

  }

  ngOnInit():void{

    
  }

}
