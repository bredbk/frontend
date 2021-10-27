import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[]
  clientService: any;
  router: any;

  constructor(private clientSevice: ClientService) { }

  ngOnInit(): void {
    this.clientSevice.list().subscribe(clients =>{
      this.clients = clients
      console.log(clients)
    })
  }

  clientDeposit(): void {
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showOnConsole('Realizado com sucesso!')
      this.router.navigate(['/clients/balance'])
    })
  }
  client(client: any) {
    throw new Error('Method not implemented.');
  }
  cancel(): void {
    this.router.navigate(['/clients/balance'])
  }

}
