import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  constructor(private ticketService: TicketService,
              private router: Router){}

  ngOnInit(): void {
  
  }

  agregarTicket(){
    this.router.navigate(["ticketForm",0]);
  }

}
