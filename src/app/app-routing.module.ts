import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterLeadComponent } from './components/forms/register-lead/register-lead.component';
import { VerLeadsComponent } from './components/leads/ver-leads/ver-leads.component';
import { MisLeadsComponent } from './components/leads/mis-leads/mis-leads.component';
import { ContratoComponent } from './components/leads/contrato/contrato.component';
import { ProspectosComponent } from './components/leads/prospectos/prospectos.component';
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios.component';
import { PerfilUsuarioComponent } from './components/usuarios/perfil-usuario/perfil-usuario.component';
import { InventarioFormComponent } from './components/forms/inventario-form/inventario-form.component';
import { ApartadosComponent } from './components/pipeline/apartados/apartados.component';
import { FirmasComponent } from './components/pipeline/firmas/firmas.component';
import { PostVentaComponent } from './components/pipeline/post-venta/post-venta.component';
import { VerInventarioComponent } from './components/inventarios/ver-inventario/ver-inventario.component';
import { ContratosComponent } from './components/pipeline/contratos/contratos.component';
import { InventariosInfoComponent } from './components/inventarios-info/inventarios-info.component';
import { MenuMapasComponent } from './components/map/menu-mapas/menu-mapas.component';
import { MapaComponent } from './components/map/mapa/mapa.component';
import { ConfigurarMapaComponent } from './components/map/configurar-mapa/configurar-mapa.component';
import { AsignaInventarioComponent } from './components/map/asigna-inventario/asigna-inventario.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginFormComponent},
  {path:'dashboard',component:DashboardComponent,children: [
    { path: 'registerLead', component: RegisterLeadComponent },
    { path: 'verLeads',component:VerLeadsComponent},
    { path: 'misLeads',component:MisLeadsComponent},
    { path: 'registerForm',component:RegisterFormComponent},
    { path: 'listaUsuarios',component:ListaUsuariosComponent},
    { path: 'perfilUsuario',component:PerfilUsuarioComponent},
    { path: 'prospectos',component:ProspectosComponent},
    { path: 'addInventory',component:InventarioFormComponent},
    { path: 'apartado',component:ApartadosComponent},
    { path: 'firma',component:FirmasComponent},
    { path: 'postVenta',component:PostVentaComponent},
    { path: 'verInventario',component:VerInventarioComponent},
    { path: 'contrato',component:ContratoComponent},
    { path: 'contratos',component:ContratosComponent},
    { path: 'infoInventario/:id',component:InventariosInfoComponent},
    { path: 'menuMapas',component:MenuMapasComponent},
    { path: 'mapa/:nombre',component:MapaComponent},
    { path: 'mapa/:nombre/:idMapa',component:MapaComponent},
    { path: 'mapa/:idCoordenada',component:AsignaInventarioComponent}
    
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
