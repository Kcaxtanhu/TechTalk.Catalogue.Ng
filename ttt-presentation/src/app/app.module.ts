import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SessoesComponent } from './sessoes/sessoes.component';
import { SessaoDetalheComponent } from './sessao-detalhe/sessao-detalhe.component';
import { ApresentadoresComponent } from './apresentadores/apresentadores.component';
import { ApresentadorDetalheComponent } from './apresentador-detalhe/apresentador-detalhe.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, SessoesComponent, SessaoDetalheComponent, ApresentadoresComponent, ApresentadorDetalheComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
