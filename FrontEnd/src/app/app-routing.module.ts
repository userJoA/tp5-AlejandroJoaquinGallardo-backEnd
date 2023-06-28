import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';


const routes: Routes = [
  { path: 'producto', component:ProductoComponent},
  { path: 'formProducto/:id', component: FormProductoComponent},
  { path: 'transaccion', component: TransaccionComponent},
  { path: 'transaccionForm/:id', component:TransaccionFormComponent},
  { path: 'ticket',component:TicketComponent},
  { path: 'ticketForm/:id',component:TicketFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
