import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { AjouterComponent } from './etudiant/ajouter/ajouter.component';

const routes: Routes = [
  {path : '' , component:LoginComponent , pathMatch:'full'} ,
  {path : "etudiant/ajouter" , component: AjouterComponent } ,
  {path : "**" , component: ErrorpageComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
