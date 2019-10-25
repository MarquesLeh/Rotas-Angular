import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesContato } from './paginas/components/contato/contato-routing-module';


const routes: Routes = [{
  path: 'index',
  pathMatch: 'full',
  redirectTo: 'localhost:400',


},
  ...RoutesContato
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
