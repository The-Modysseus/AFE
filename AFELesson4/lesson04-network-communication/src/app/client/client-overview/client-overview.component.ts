import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-overview.component.html',
  styleUrl: './client-overview.component.scss'
})
export class ClientOverviewComponent {
  clientService = inject(ClientService);

  clients: Client[] = [];

  getClients() {
    console.log ("Getting clients");
    return this.clientService.getClients().subscribe((clients) => { 
      console.log(clients);
      this.clients = clients; });
  }

  ngOnInit() {
    this.getClients();
  }
}
