import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as FileSaver from 'file-saver';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { HeaderComponent } from './components/header/header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterLeadComponent } from './components/forms/register-lead/register-lead.component';
import { VerLeadsComponent } from './components/leads/ver-leads/ver-leads.component';
import { InventarioFormComponent } from './components/forms/inventario-form/inventario-form.component';
import { LeadsAcomuladosComponent } from './components/graficas/leads-acomulados/leads-acomulados.component';
import { LeadsPorCanalComponent } from './components/graficas/leads-por-canal/leads-por-canal.component';
import { InventarioDisponibleComponent } from './components/graficas/inventario-disponible/inventario-disponible.component';
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios.component';
import { PerfilUsuarioComponent } from './components/usuarios/perfil-usuario/perfil-usuario.component';
import { ApartadoPorPrototipoComponent } from './components/graficas/apartado-por-prototipo/apartado-por-prototipo.component';
import { ApartadoPorCanalComponent } from './components/graficas/apartado-por-canal/apartado-por-canal.component';
import { ApartadosComponent } from './components/pipeline/apartados/apartados.component';
import { ContratosComponent } from './components/pipeline/contratos/contratos.component';
import { FirmasComponent } from './components/pipeline/firmas/firmas.component';
import { EntregaComponent } from './components/pipeline/entrega/entrega.component';
import { PostVentaComponent } from './components/pipeline/post-venta/post-venta.component';
import { VerInventarioComponent } from './components/inventarios/ver-inventario/ver-inventario.component';
import { LeadsMesComponent } from './components/graficas/leads-mes/leads-mes.component';
import { MisLeadsComponent } from './components/leads/mis-leads/mis-leads.component';
import { ProspectosComponent } from './components/leads/prospectos/prospectos.component';
import { LeadsVendorComponent } from './components/graficas/leads-vendor/leads-vendor.component';
import { ContratoComponent } from './components/leads/contrato/contrato.component';
import { HitrateApartadoComponent } from './components/graficas/hitrate-apartado/hitrate-apartado.component';
import { CotizadorComponent } from './components/pipeline/cotizador/cotizador.component';
import { ListaCotizacionesComponent } from './components/pipeline/lista-cotizaciones/lista-cotizaciones.component';
import { VerCotizacionComponent } from './components/pipeline/ver-cotizacion/ver-cotizacion.component';
import { InventariosInfoComponent } from './components/inventarios-info/inventarios-info.component';
import { MapaComponent } from './components/map/mapa/mapa.component';
import { MenuMapasComponent } from './components/map/menu-mapas/menu-mapas.component';
import { ConfigurarMapaComponent } from './components/map/configurar-mapa/configurar-mapa.component';
import { AsignaInventarioComponent } from './components/map/asigna-inventario/asigna-inventario.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
  
    HeaderComponent,
       DashboardComponent,
       SidebarComponent,
       RegisterLeadComponent,
       VerLeadsComponent,
       InventarioFormComponent,
       LeadsAcomuladosComponent,
       LeadsPorCanalComponent,
       InventarioDisponibleComponent,
       ListaUsuariosComponent,
       PerfilUsuarioComponent,
       ApartadoPorPrototipoComponent,
       ApartadoPorCanalComponent,
       ApartadosComponent,
       ContratosComponent,
       FirmasComponent,
       EntregaComponent,
       PostVentaComponent,
       VerInventarioComponent,
       LeadsMesComponent,
       MisLeadsComponent,
       ProspectosComponent,
       LeadsVendorComponent,
       ContratoComponent,
       HitrateApartadoComponent,
       CotizadorComponent,
       ListaCotizacionesComponent,
       VerCotizacionComponent,
       InventariosInfoComponent,
       MapaComponent,
       MenuMapasComponent,
       ConfigurarMapaComponent,
       AsignaInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
