import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from './../models/carro';


@Injectable({
  providedIn: 'root',
})
export class CarroService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${API_CONFIG.baseUrl}/carros`);
  }

  create(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(`${API_CONFIG.baseUrl}/Carros`, carro);
  }
}
