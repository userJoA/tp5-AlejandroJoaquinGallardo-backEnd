import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {


  constructor(private ticketService: TicketService,
    private espectatorService:EspectadorService,
    private activatedRouter: ActivatedRoute,
    private router: Router) {
      
      this.espectador=new Espectador();
      this.espectadores = new Array<Espectador>();

  }

  ticket!:Ticket;
  accion!: string;
  band1: boolean = false;
  espectador!: Espectador;
  espectadores!:Array<Espectador>;
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
        if (params['id'] == "0") {
          this.accion = "new";
          this.ticket=new Ticket();
          this.cargarEspectadores();
         

        } else {
          this.accion = "update";
          this.ticket=new Ticket();
          this.cargarTicket(params['id']);

        }
      }
    )
  }


  async cargarEspectadores(){
    this.espectatorService.getEspectadores().subscribe(data=>{
      console.log(data);
      let espectador= new Espectador();
      data.forEach((element:any)=>{
          Object.assign(espectador, element);
          this.espectadores.push(espectador);
          espectador=new Espectador();
      })
    })
  }

  guardarTicket(){
    this.ticketService.createTicket(this.ticket).subscribe(res => {
      if(res.status==1)
      {
        alert(res.msg);
        this.ticket= new Ticket();
        this.router.navigate(["ticket"]);
      }
       },error=>{
           alert(error.msg);
      }

    )
  }

 async cargarTicket(id:string){
    await this.cargarEspectadores();
    this.ticket=new Ticket();
    this.ticketService.getTicket(id).subscribe(res =>{
        Object.assign(this.ticket, res);
        console.log(this.espectadores);
        this.ticket.espectador = this.espectadores.find(espect=> (espect._id==this.ticket.espectador._id))!;
      },error=>{
          console.log("Error al traer la informacion")
      }
    )
  }

  modificarTicket(ticket:Ticket) {
      this.ticketService.modificarTicket(ticket).subscribe(
        result => {
          console.log(result);
          this.router.navigate(["ticket"]);
        },
        error => {
          console.log(error);
        }
      );
  }

  irAlista(){
    this.router.navigate(["ticket"]);
  }
}
