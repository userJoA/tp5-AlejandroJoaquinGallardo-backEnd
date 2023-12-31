import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion-form',
  templateUrl: './transaccion-form.component.html',
  styleUrls: ['./transaccion-form.component.css']
})
export class TransaccionFormComponent implements OnInit{
  transaccion!:Transaccion;
  divisas: Array<any>;
  constructor(private transaccionService: TransaccionService,
              private activatedRouter:ActivatedRoute,
              private router: Router){
    this.transaccion= new Transaccion();
    this.divisas = [

      //tabla 1
      {
        
        nom: "1 USD",
        USD: 1.000000,
        EUR: 0.919901,
        GBP: 0.811469,
        JPY: 108.9079,
        CNY: 7.057569,
        AUD: 1.619886,
        BTC: 0.000140,
        ARS: 64087725,

        nom1: "Inverse",
        USD1: 1.000000,
        EUR2: 1.087074,
        GBP3: 1.232332,
        JPY4: 0.009182,
        CNY5: 0.141692,
        AUD6: 0.617328,
        BTC7: 7148.757,
        ARS8: 0.015414,
      },
      //tabla 2
      {
        
        nom: "1 EUR",
        USD: 1.087074,
        EUR: 1.000000,
        GBP: 0.882127,
        JPY: 108.9079,
        CNY: 7.672100,
        AUD: 1.760936,
        BTC: 0.000152,
        ARS: 70.52637,

        nom1: "Inverse",
        USD1: 0.919901,
        EUR2: 1.000000,
        GBP3: 1.133623,
        JPY4: 0.008447,
        CNY5: 0.130342,
        AUD6: 0.567880,
        BTC7: 6576.146,
        ARS8: 0.014179,
      },
      //tabla 3
      {
        
        nom: "1 GBP",
        USD: 1.232332,
        EUR: 1.133623,
        GBP: 1.000000,
        JPY: 134.2108,
        CNY: 8.697272,
        AUD: 1.996238,
        BTC: 0.000172,
        ARS: 79.95034,

        nom1: "Inverse",
        USD1: 0.811469,
        EUR2: 0.882127,
        GBP3: 1.000000,
        JPY4: 0.007451,
        CNY5: 0.114979,
        AUD6: 0.500942,
        BTC7: 5800.997,
        ARS8: 0.012508,
      },
      //tabla 4
      {
        
        nom: "1 RUB",
        USD: 0.013226,
        EUR: 0.012166,
        GBP: 0.010732,
        JPY: 1.440365,
        CNY: 0.093340,
        AUD: 0.021424,
        BTC: 0.000002,
        ARS: 0.858036,

        nom1: "Inverse",
        USD1: 75.61134,
        EUR2: 82.19511,
        GBP3: 93.17830,
        JPY4: 0.694268,
        CNY5: 10.71351,
        AUD6: 46.67696,
        BTC7: 540527.1,
        ARS8: 1.165452,
      },
    ]
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
            this.band1=false;
            this.router.navigate(["transaccion"]);
            this.transaccion= new Transaccion();
          }
      },error=>{
        alert(error.msg);
      }
    )
  }

  

}
