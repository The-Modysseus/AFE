import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Client } from '../client/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  httpClient = inject(HttpClient);

  getClients() {
    return this.httpClient.get<Client[]>('localhost:3000/exercise/client');
  }
}
