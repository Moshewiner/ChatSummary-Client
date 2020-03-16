import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { WordsCountComponent } from './components/words-count/words-count.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WhatsappComponent,
    WordsCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
