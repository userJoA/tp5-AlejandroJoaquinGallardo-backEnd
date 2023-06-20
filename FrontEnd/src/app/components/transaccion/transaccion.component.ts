import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private transaccionService: TransaccionService,
              private router: Router,
              private activatedRoute: ActivatedRoute){

    this.transacciones= new Array<Transaccion>();

  }

  aux:boolean=false;
  aux2:boolean=false;
  transaccion!:Transaccion;
  transacciones!:Array<Transaccion>;
  bandTransacciones:boolean = false;

  cambiar(){
    if(this.aux==false){
     this.aux=true;
    }else
    this.aux=false;
  }
  cambiar2(){
    if(this.aux2==false){
      this.aux2=true;
     }else
     this.aux2=false;
  }

  public cargarTransacciones(){
    this.transacciones= new Array<Transaccion>();
    this.transaccionService.getTransacciones().subscribe(
      result=>{
        let tran= new Transaccion();
        result.forEach((element:any) => {
          Object.assign(tran, element);
          this.transacciones.push(tran);
          tran = new Transaccion();
        });
      }
    )
    this.bandTransacciones=true;
  }

  email:string="";
  public cargarTransacionesPorEmail(){
    this.transacciones= new Array<Transaccion>();
    this.transaccionService.getTransaccionesEmail(this.email).subscribe(
      result=>{
        let tran= new Transaccion();
        result.forEach((element:any) => {
          Object.assign(tran, element);
          this.transacciones.push(tran);
          tran = new Transaccion();
        });
      }
    )
    this.bandTransacciones=true;
  }

  monedaOrigen:string="";
  monedaDestino:string="";
  public cargarTransacionesMonOD(){
    this.transacciones= new Array<Transaccion>();
    this.transaccionService.getTransaccionesMonedas(this.monedaOrigen,this.monedaDestino).subscribe(
      result=>{
        let tran= new Transaccion();
        result.forEach((element:any) => {
          Object.assign(tran, element);
          this.transacciones.push(tran);
          tran = new Transaccion();
        });
      }
    )
    this.bandTransacciones=true;
  }
  eliminarTransaccion (id:string){
    this.transaccionService.deleteTransaccion(id).subscribe(
      result=>{
        console.log("Transaccion eliminada");
        this.transacciones= new Array<Transaccion>();
        this.cargarTransacciones();
      },error=>{
        console.log("Error al eliminar Transaccion");
      }

    );
  } 

  public agregarTransaccion(){
    this.router.navigate(["transaccionForm",0])
  }

}
