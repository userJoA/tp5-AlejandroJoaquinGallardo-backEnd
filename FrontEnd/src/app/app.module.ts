import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/layout/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { FormsModule } from '@angular/forms';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { EspectadorComponent } from './components/espectador/espectador.component';
import { EspectadorFormComponent } from './components/espectador-form/espectador-form.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FormProductoComponent,
    TransaccionComponent,
    TransaccionFormComponent,
    EspectadorComponent,
    EspectadorFormComponent,
    TicketComponent,
    TicketFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
