import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioControllerService } from 'src/app/api-client'; // Atualize o caminho conforme necessário
import { Router } from '@angular/router';
import { AuthRequestDTO, AuthResponseDTO } from 'src/app/api-client'; // Importar DTOs adequados

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: AuthRequestDTO = { email: '', senha: '' }; // Usando AuthRequestDTO
  errorMessage: string | null = null;

  constructor(private authService: UsuarioControllerService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return; // Evita o envio se o formulário for inválido
    }

    this.authService.login(this.loginData)
      .subscribe({
        next: (response: AuthResponseDTO) => {
          this.handleLoginResponse(response);
        },
        error: () => {
          this.errorMessage = 'Usuário ou senha inválidos';
        }
      });
  }

  private handleLoginResponse(response: AuthResponseDTO): void {
    if (response && response.id && response.token) {
      localStorage.setItem('usuarioId', response.id.toString()); // Armazena o ID do usuário
      localStorage.setItem('token', response.token); // Armazena o token
      this.router.navigate(['/cadastroposts']); // Redireciona
    } else {
      this.errorMessage = 'Resposta de login inválida';
    }
  }
}
