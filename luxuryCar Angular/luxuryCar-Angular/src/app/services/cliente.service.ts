import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './../models/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(${API_CONFIG.baseUrl}/clientes);
  }

  findById (id: number): Observable<object> {
    return this.http.get(${API_CONFIG.baseUrl}/clintes/{id});
  }

  delete(id: number): Observable<object> {
    return this.http.delete(${API_CONFIG.baseUrl}/clintes/{id});
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(${API_CONFIG.baseUrl}/clientes, cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(${API_CONFIG.baseUrl}/clientes, cliente.id);
  }
}