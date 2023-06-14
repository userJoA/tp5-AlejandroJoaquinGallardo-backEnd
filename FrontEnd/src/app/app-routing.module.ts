import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';


const routes: Routes = [
  { path: 'producto', component:ProductoComponent},
  { path: 'formProducto/:id', component: FormProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
