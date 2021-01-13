import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//services
import {EntryService} from './entry.service'
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

//Materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
