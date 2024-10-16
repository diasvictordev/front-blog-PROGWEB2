import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioControllerService } from 'src/app/api-client'; 
import { Router } from '@angular/router';
import { AuthRequestDTO, AuthResponseDTO } from 'src/app/api-client'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: AuthRequestDTO = { email: '', senha: '' };
  toastMessage: string | null = null;
  isSuccess: boolean = true;
  errorMessage: string | null = null;

  constructor(private authService: UsuarioControllerService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return; 
    }

    this.authService.login(this.loginData)
      .subscribe({
        next: (response: AuthResponseDTO) => {
          this.handleLoginResponse(response);
        },
        error: () => {
          this.errorMessage = 'Usuário ou senha inválidos';
          this.showToast('Usuário ou senha inválidos', false);
        }
      });
  }

  showToast(message: string, isSuccess: boolean) {
    this.toastMessage = message;
    this.isSuccess = isSuccess;

    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }


  private handleLoginResponse(response: AuthResponseDTO): void {
    if (response && response.id && response.token) {
      localStorage.setItem('usuarioId', response.id.toString());
      localStorage.setItem('token', response.token);
      this.router.navigate(['/cadastroposts']); 
    } else {
      this.errorMessage = 'Resposta de login inválida';
    }
  }
}
