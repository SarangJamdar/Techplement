import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShowallquotesComponent } from './showallquotes/showallquotes.component';
import { AddnewquoteComponent } from './addnewquote/addnewquote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule } from "@angular/common/http";
import { UpdatequoteComponent } from './updatequote/updatequote.component';
import { AuthorquotesComponent } from './authorquotes/authorquotes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShowallquotesComponent,
    AddnewquoteComponent,
    UpdatequoteComponent,
    AuthorquotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
