import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrousuarioComponent } from '../pages/cadastrousuario/cadastrousuario.component'
import { LoginComponent } from 'src/pages/login/login.component';
import { CadastroPostsComponent } from 'src/pages/cadastroposts/cadastroposts.component';
import { ListagempostsComponent } from 'src/pages/listagemposts/listagemposts.component';

const routes: Routes = [
  {
    path: "",
    component: CadastrousuarioComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cadastroposts",
    component: CadastroPostsComponent
  },
  {
    path: "posts",
    component: ListagempostsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
