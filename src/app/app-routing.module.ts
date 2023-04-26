import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VitaComponent } from './vita/vita.component';
import { CalenderComponent } from './calender/calender.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'vita', component:VitaComponent},
  { path: 'calender', component:CalenderComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'gallery', component:GalleryComponent},
  { path: 'impressum', component:ImpressumComponent},
  { path: 'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
