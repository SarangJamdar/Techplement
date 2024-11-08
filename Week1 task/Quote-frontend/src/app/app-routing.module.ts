import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowallquotesComponent } from './showallquotes/showallquotes.component';
import { AddnewquoteComponent } from './addnewquote/addnewquote.component';
import { UpdatequoteComponent } from './updatequote/updatequote.component';
import { AuthorquotesComponent } from './authorquotes/authorquotes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'showallquotes', component: ShowallquotesComponent },
  { path: 'addnewquotes', component: AddnewquoteComponent },
  { path: 'updatequote/:id', component: UpdatequoteComponent },
  { path: 'authoequotes', component: AuthorquotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
