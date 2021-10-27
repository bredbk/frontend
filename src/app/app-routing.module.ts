import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ClientCrudComponent } from './views/client-crud/client-crud.component'
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientsShowComponent } from './views/clients-show/clients-show.component';
import { ClientDepositComponent } from './components/client/client-deposit/client-deposit.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clients",
    component: ClientCrudComponent
  },
  {
    path: "clients/create",
    component: ClientCreateComponent
  },
  {
    path: "clients/balance",
    component: ClientsShowComponent
  },
  {
    path: "clients/deposit/:id",
    component: ClientDepositComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
