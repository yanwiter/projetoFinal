import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/Endereco';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(`${API_CONFIG.baseUrl}/enderecos`);
  }

  findById(id: any): Observable<Endereco> {
    return this.http.get<Endereco>(`${API_CONFIG.baseUrl}/enderecos/${id}`);
  }
  create(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(`${API_CONFIG.baseUrl}/enderecos`, endereco);
  }

  update(endereco: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(`${API_CONFIG.baseUrl}/enderecos/${endereco.id}`, endereco);
  }
  
  delete(id: any): Observable<Endereco> {
    return this.http.delete<Endereco>(`${API_CONFIG.baseUrl}/enderecos/${id}`);
  }
}
