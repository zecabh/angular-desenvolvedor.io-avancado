import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FornecedorRoutingModule } from './fornecedor.route';
import { FornecedorAppComponent } from './fornecedor.app.component';

import { FornecedorService } from './services/fornecedor.service';
import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { FornecedorResolve } from './services/fornecedor.resolve';

import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { FornececedorGuard } from './services/fornecedor.guard';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

@NgModule({
  declarations: [
    FornecedorAppComponent,
    NovoComponent,
    ListaComponent,
    EditarComponent,
    DetalhesComponent,
    ExcluirComponent,
    ListaProdutosComponent,
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    NgBrazil,
    TextMaskModule,
    NgxSpinnerModule,
  ],
  providers: [
    FornecedorService,
    FornecedorResolve,
    FornececedorGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FornecedorModule { }
