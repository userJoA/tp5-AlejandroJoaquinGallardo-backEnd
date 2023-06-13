import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  constructor(private productoService:ProductoService){
    this.cargarProductos();
    this.productos= new Array<Producto>();
  }
  ngOnInit(): void {

  }
  producto!: Producto;
  productos!:Array<Producto>;


  public cargarProductos(){
    this.productoService.getproductos().subscribe(
      result=>{
        let pro= new Producto();
        result.forEach((element:any) => {
          Object.assign(pro, element);
          this.productos.push(pro);
          pro = new Producto();
        });
      }
    )
  }

}
