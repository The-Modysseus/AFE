import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Client } from '../client/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  httpClient = inject(HttpClient);

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>('http://localhost:3000/exercise/client');    
  }
}
