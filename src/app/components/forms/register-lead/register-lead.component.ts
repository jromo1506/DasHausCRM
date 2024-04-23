import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadApiService } from 'src/app/services/lead-api.service';



@Component({
  selector: 'app-register-lead',
  templateUrl: './register-lead.component.html',
  styleUrls: ['./register-lead.component.scss']
})
export class RegisterLeadComponent implements OnInit{

  RegisterLeadForm : FormGroup;


  constructor(private fb: FormBuilder, private leadApiService:LeadApiService) {
    this.RegisterLeadForm = this.fb.group({
      nombreLead: ['', Validators.required],
      origenLead: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      numero: ['', Validators.required],
      modeloCasa: ['', Validators.required],
      statusLead: ['', Validators.required]
    });
   }


   

   origenLeadOptions: string[] = [
    'RECOMENDACIÓN',
    'WATS APP y FACEBOOK',
    'REDES SOCIALES',
    'VISITA AL DESARROLLO',
    'ESPECTACULARES',
    'PRENSA Y REVISTAS',
    'RADIO',
    'FERIAS Y EXPOSICIONES',
    'VOLANTEO CREATIVO',
    'SINDICATOS',
    'VISITA A EMPRESAS',
    'FOLLETOS EN BANCOS',
    'CENTROS COMERCIALES',
    'OTROS'
  ];

  statusLeadOptions: string[] = [
    'EN PROCESO',
    'APARTADO',
    'CONTRATO GENERADO',
    'FIRMADO',
    'VIVIENDA ENTREGADA'
  ];


  ngOnInit(): void {
  
  
    
  }

  private obtenerMesActualTexto(): string {
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril",
      "Mayo", "Junio", "Julio", "Agosto",
      "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth();
    const nombreMes = meses[mesActual];
    return nombreMes;
  }

  onSubmit() {

    console.log(this.obtenerMesActualTexto())

    var idcuenta = localStorage.getItem('accountId');
    

    console.log(idcuenta)
    const LEAD:any = {
      leadName:this.RegisterLeadForm.get('nombreLead')?.value,
      leadOrigin:this.RegisterLeadForm.get('origenLead')?.value,
      leadEmail:this.RegisterLeadForm.get('correoElectronico')?.value,
      leadNumber:this.RegisterLeadForm.get('numero')?.value,
      leadModel:this.RegisterLeadForm.get('modeloCasa')?.value,
      leadStatus:this.RegisterLeadForm.get('statusLead')?.value,
      leadVendor: idcuenta,
      currentDate: this.obtenerMesActualTexto()
    }

    

    console.log(LEAD)

    this.leadApiService.addLead(LEAD).subscribe(data=>{
       alert("Exito");
    },error=>{
      // alert("Error");
    });
  }

}
