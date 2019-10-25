import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginasComponent } from './components/paginas/paginas.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { ContatoComponent } from './components/contato/contato.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';



@NgModule({
  declarations: [PaginasComponent, InicialComponent, ContatoComponent, QuemSomosComponent],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
