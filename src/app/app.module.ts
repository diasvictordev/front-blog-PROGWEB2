import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './api-client/api.module';
import { CadastrousuarioComponent } from '../pages/cadastrousuario/cadastrousuario.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../pages/login/login.component';
import { CadastroPostsComponent } from 'src/pages/cadastroposts/cadastroposts.component';
import { RouterModule } from '@angular/router';
import { ToastcomponentComponent } from './toastcomponent/toastcomponent.component';
import { ListagempostsComponent } from 'src/pages/listagemposts/listagemposts.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CadastrousuarioComponent,
    LoginComponent,
    CadastroPostsComponent,
    ToastcomponentComponent,
    ListagempostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    FormsModule, 
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
