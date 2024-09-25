import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioControllerService } from 'src/app/api-client'; // Atualize o caminho conforme necessário
import { Router } from '@angular/router';
import { CadastroPostsComponent } from '../cadastroposts/cadastroposts.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', senha: '' };
  errorMessage: string | null = null;

  constructor(private authService: UsuarioControllerService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.loginData)
      .subscribe({
        next: (response: any) => {
          console.log('Login bem-sucedido', response);
          if (response && response.usuarioId && response.token) {
            localStorage.setItem('usuarioId', response.usuarioId); // Armazena o ID do usuário
            localStorage.setItem('token', response.token); // Armazena o token
            this.router.navigate(['/cadastroposts']); // Redireciona
          } else {
            console.error('ID do usuário ou token não encontrados na resposta');
          }
        },
        error: (error) => {
          console.error('Erro no login', error);
          this.errorMessage = 'Usuário ou senha inválidos';
        }
      });
  }
}
