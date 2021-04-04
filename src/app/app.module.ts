import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoWebComponent } from './curso-web/curso-web.component';
import { GuiasComponent } from './guias/guias.component';
import { ServicioComponent } from './servicio/servicio.component';
import { CursoZoomComponent } from './curso-zoom/curso-zoom.component';
import { LibrosComponent } from './libros/libros.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoWebComponent,
    GuiasComponent,
    ServicioComponent,
    CursoZoomComponent,
    LibrosComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
