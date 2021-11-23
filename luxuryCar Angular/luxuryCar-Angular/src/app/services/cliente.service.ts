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
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/Cliente`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/Cliente`, cliente);
  }
}
