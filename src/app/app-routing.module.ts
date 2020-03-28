import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { HomeComponent } from './page/home/home.component';
import { PacienteComponent } from './page/paciente/paciente.component';
import { ConsultasComponent } from './page/consultas/consultas.component';
import { VerComponent } from './page/ver/ver.component';
import { EmergenciasComponent } from './page/emergencias/emergencias.component';
import { CodigoQrComponent } from './page/codigo-qr/codigo-qr.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'consultas', component: ConsultasComponent},
  {path: 'ver', component: VerComponent},
  {path: 'emergencias', component: EmergenciasComponent},
  {path: 'codigo-qr', component: CodigoQrComponent},
  /***Si no hay nada me dirije a HOme****/
  {path: '', component: HomeComponent},
  /***Codigo para q lo q sea me mande a home**/
  {path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
