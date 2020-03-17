import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'whatsapp',
        component: WhatsappComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
