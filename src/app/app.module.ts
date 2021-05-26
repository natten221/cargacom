import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Registro1Component } from './componentes/registro1/registro1.component';
import { Registro2Component } from './componentes/registro2/registro2.component';
import { Registro3Component } from './componentes/registro3/registro3.component';
import { Registro4Component } from './componentes/registro4/registro4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    Registro1Component,
    Registro2Component,
    Registro3Component,
    Registro4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
