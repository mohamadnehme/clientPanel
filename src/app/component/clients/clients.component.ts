import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/clients';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService: ClientService, private authService: AuthService) { }

  clients: Client[];
  totalOwed: number;

  ngOnInit() {
    this.clientService.getClients().subscribe(c => {
    this.clients = c;
    this.getTotalOwed();
    });
  }
  getTotalOwed() {
    this.totalOwed = this.clients.reduce((total, client) => {
      return total + parseFloat(client.balance.toString());
    }, 0);
  }
}
