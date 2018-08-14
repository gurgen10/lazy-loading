import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path: 'customers',
    loadChildren: '../app/customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: '../app/orders/orders.module#OrdersModule'
  },
  {
    path:'**',
    component:PageNoteFoundComponent

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentRouts = [ HomeComponent,PageNoteFoundComponent ];
