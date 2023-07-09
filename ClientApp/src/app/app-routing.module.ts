import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { VitaComponent } from './site/vita/vita.component';
import { CalenderComponent } from './site/calender/calender.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vita', component:  VitaComponent},
  { path: 'calender', component: CalenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
