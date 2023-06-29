import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets!:Array<Ticket>;
  Espectador!:string;
  band:boolean=false;
  constructor(private ticketService: TicketService,
              private router: Router){
    this.cargarTickets();
    this.tickets= new Array<Ticket>();

  }

  ngOnInit(): void {

  }

  cargarTickets(){
    this.tickets= new Array<Ticket>();
    this.ticketService.getTickets().subscribe(
      res=>{
        console.log(res);
        let ticket = new Ticket();
        res.forEach((e:any)=>{
          Object.assign(ticket,e);
          this.tickets.push(ticket);
          ticket= new Ticket();
        })
        console.log(this.tickets);
      }
    )
  }

  deleteTicket(id:string){
    this.ticketService.deleteTicket(id).subscribe(
      res=>{
        console.log(res);
        this.cargarTickets();
      },error=>{
        console.log(error);
      }
    )
  }

  filtrar(espectador:string){
    this.tickets= new Array<Ticket>();
    this.ticketService.getTicketsPorCategoria(espectador).subscribe(
      res=>{
        console.log(res);
        let ticket = new Ticket();
        res.forEach((e:any)=>{
          Object.assign(ticket,e);
          this.tickets.push(ticket);
          ticket= new Ticket();
        })
        this.band=true;
        console.log(this.tickets);
      },error=>{

      }
    )
  }
  agregarTicket(){
    this.router.navigate(["ticketForm",0]);
  }

  modificar(id:string){
    this.router.navigate(["ticketForm",id]);
  }
}
