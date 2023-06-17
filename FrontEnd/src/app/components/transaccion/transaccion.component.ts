import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
              private router: Router){

    this.transacciones= new Array<Transaccion>();

  }

  aux:string="";
  transaccion!:Transaccion;
  transacciones!:Array<Transaccion>;
  bandTransacciones:boolean = false;

  public cargarTransacciones(){
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

  email:string="1000";
  bandTransaccionesEmail:boolean=false;

  public cargarTransacionesPorEmail(){
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
      this.bandTransaccionesEmail=true;
  }

  public agregarTransaccion(){
    this.router.navigate(["",0])
  }

}
