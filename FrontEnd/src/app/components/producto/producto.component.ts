import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  constructor(private productoService:ProductoService,
              private router:Router){
    this.cargarProductos();
    this.productos= new Array<Producto>();
    this.carroProductos= new Array<Producto>();
  }
  ngOnInit(): void {

  }
  producto!: Producto;
  productos!:Array<Producto>;
  carroProductos!:Array<Producto>;
  precioTotal: number = 0;

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

  agregarProductoCarro(p:Producto){
    this.carroProductos.push(p);
    this.precioTotal= this.precioTotal+p.precio;

  }

  public agregarProducto(){
    this.router.navigate(["formProducto",0])   
  }
}
