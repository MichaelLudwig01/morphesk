import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VitaComponent } from './vita/vita.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'vita', component:VitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
