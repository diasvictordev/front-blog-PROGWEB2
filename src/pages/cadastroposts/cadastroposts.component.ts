import { Component } from '@angular/core';
import { Post, PostControllerService } from 'src/app/api-client'; // Importe o serviço de posts
import { UsuarioControllerService, Usuario } from 'src/app/api-client';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastroposts',
    templateUrl: './cadastroposts.component.html',
    styleUrls: ['./cadastroposts.component.css']
})
export class CadastroPostsComponent {

    getUsuarioId(): number | null {
        const usuarioId = localStorage.getItem('usuarioId');
        const parsedId = parseInt(usuarioId || 'NaN', 10);
        return isNaN(parsedId) ? null : parsedId;
      }
    post: Post = { titulo: '', post: '' };

    constructor(private postService: PostControllerService, private usuarioService: UsuarioControllerService ,private router: Router) { }

    onSubmit(form: NgForm): void {
        const usuarioId = this.getUsuarioId(); 
        console.log('usuarioId:', usuarioId); // Debugging
    
        if (usuarioId === null) {
            console.error('Usuário não está logado.');
            return; 
        }
    
        this.usuarioService.listarUsuarioPorId(usuarioId).subscribe(
            (usuario: Usuario) => {
                const postData: Post = { ...this.post, usuario: usuario }; // Passa o usuário corretamente
                this.createPost(postData);
                form.reset();
                this.post = { titulo: '', post: '' }; // Reset the post object
            },
            (error: any) => {
                console.error('Erro ao obter dados do usuário:', error);
            }
      );
  }

  createPost(postData: Post): void {
      this.postService.postar(postData).subscribe(
          (newPost: Post) => {
              console.log('Post criado com sucesso:', newPost);
              // Redirecionar ou mostrar mensagem de sucesso, se necessário
          },
          (error: any) => {
              console.error('Erro ao criar post:', error);
          }
      );
  }
}