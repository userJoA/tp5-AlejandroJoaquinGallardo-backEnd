import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements  OnInit {
  producto!: Producto;
  constructor(private route: ActivatedRoute,
              private productoService: ProductoService){
    this.producto = new Producto();       
  }
  
  accion:string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
        if (params['id']==0){
          this.accion = "new";
        }
      }
    )
    
  }

  guardarProducto(){
    this.productoService.crearProducto(this.producto).subscribe(result=>{
        if(result.status==1){
          alert(result.msg);
        }
      },error=>{
        alert(error.msg);
      }
    )
    this.producto= new Producto();
  }

}
