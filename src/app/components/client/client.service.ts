import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:2626/cliente"

  constructor(private snakBar: MatSnackBar, private http: HttpClient) { }

  showOnConsole(msg: string): void {
    this.snakBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client)
  }
  list(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl)
  }
  listBalanceById(id: number): Observable<Client> {
    const url = `S{this.baseUrl}/${id}`
    return this.http.get<Client>(url)
  }
  deposit(client: Client): Observable<Client> { 
    const url = `S{this.baseUrl}/${client.id}`
    return this.http.put<Client>(url, client)
  }

  
}
