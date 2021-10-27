import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    name: '',
    account: 0,
    balance: 0

  }

  constructor(private clientService: ClientService, private router: Router) { }

  

  ngOnInit(): void {

  }

  createClient(): void {
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showOnConsole('Realizado com sucesso!')
      this.router.navigate(['/clients/balance'])
    })
  }
  cancel(): void {
    this.router.navigate(['/clients'])
  }

}
