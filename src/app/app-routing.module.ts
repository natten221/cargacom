import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Registro1Component } from './componentes/registro1/registro1.component';
import { Registro2Component } from './componentes/registro2/registro2.component';
import { Registro3Component } from './componentes/registro3/registro3.component';
import { Registro4Component } from './componentes/registro4/registro4.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "registrar1", component: Registro1Component},
  {path: "registrar2", component: Registro2Component},
  {path: "registrar3", component: Registro3Component},
  {path: "registrar4", component: Registro4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
