import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';



@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    MenuComponent,
    MenuLoginComponent,
    NotFoundComponent   ,
    AcessoNegadoComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    MenuComponent,
    MenuLoginComponent,
    NotFoundComponent,
    AcessoNegadoComponent
  ]
})
export class NavegacaoModule { }
