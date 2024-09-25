import { Component } from '@angular/core';
import { Usuario, UsuarioControllerService } from 'src/app/api-client';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.css']
})
export class CadastrousuarioComponent {
  constructor(private usuariocontrollerService: UsuarioControllerService,
    private router: Router
  ) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      alert('Nome, email e senha são obrigatórios.');
      return;
    }
    
    console.log('Nome:', form.value.nome);
    console.log('Email:', form.value.email);
    console.log('Senha:', form.value.senha);

    const userData: Usuario = {
      nome: form.value.nome,
      email: form.value.email,
      senha: form.value.senha,
      descricao: form.value.descricao
    };

    this.usuariocontrollerService.cadastrar(userData).subscribe(
      data => {
        console.log('Resposta do servidor:', data);
        form.reset();
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erro:', error);
      }
    );
  }
}
