import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion-form',
  templateUrl: './transaccion-form.component.html',
  styleUrls: ['./transaccion-form.component.css']
})
export class TransaccionFormComponent implements OnInit{
  transaccion!:Transaccion;
  constructor(private transaccionService: TransaccionService,
              private activatedRouter:ActivatedRoute){
    this.transaccion= new Transaccion();
  }
  accion!:string;
  band1:boolean = false;
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=>{
      if(params['id']=="0"){
        this.accion = "new";

      }else{
        this.accion = "update";

      }
    }
  )
  }

  Convertir(){
    if(this.transaccion!=null && this.transaccion.cantidadOrigen!=null && this.transaccion.tasaConversion!=null){
      this.transaccion.cantidadDestino=this.transaccion.cantidadOrigen*this.transaccion.tasaConversion;
      this.band1=true;
    }
  }

  guardarTransaccion(){
    this.transaccionService.crearTransaccion(this.transaccion).subscribe(
      response=>{
        if(response.status==1)
          {
            alert(response.msg);
            this.transaccion= new Transaccion();
            this.band1=false;
          }
      },error=>{
        alert(error.msg);
      }
    )
  }

  

}
