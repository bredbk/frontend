import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-client-deposit',
  templateUrl: './client-deposit.component.html',
  styleUrls: ['./client-deposit.component.css']
})
export class ClientDepositComponent implements OnInit {

  client: Client

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    
  }

  

  

  cancel(): void {
    this.router.navigate(['/clients/balance'])

  }



}
