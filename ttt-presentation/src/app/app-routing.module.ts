import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SessoesComponent } from './sessoes/sessoes.component';
import { ApresentadoresComponent } from './apresentadores/apresentadores.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sessoes', component: SessoesComponent },
  { path: 'apresentadores', component: ApresentadoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
