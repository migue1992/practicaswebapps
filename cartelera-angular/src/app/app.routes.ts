import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
