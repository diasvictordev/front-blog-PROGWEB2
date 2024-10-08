import { Component } from '@angular/core';
import { Post, PostControllerService } from 'src/app/api-client';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroposts',
  templateUrl: './cadastroposts.component.html',
  styleUrls: ['./cadastroposts.component.css']
})
export class CadastroPostsComponent {
  post: Post = { titulo: '', post: '', usuario: { id: undefined } };
  toastMessage: string | null = null;
  isSuccess: boolean = true;

  constructor(private postService: PostControllerService, private router: Router) { }

  getUsuarioId(): number | null {
    const usuarioId = localStorage.getItem('usuarioId');
    const parsedId = parseInt(usuarioId || 'NaN', 10);
    return isNaN(parsedId) ? null : parsedId;
  }

  onSubmit(form: NgForm): void {
    const usuarioId = this.getUsuarioId();
    console.log('usuarioId:', usuarioId);

    if (usuarioId === null) {
      console.error('Usuário não está logado.');
      this.showToast('Usuário não está logado.', false);
      return;
    }

    this.post.usuario = { id: usuarioId };
    this.createPost(this.post);
    form.reset();
    this.post = { titulo: '', post: '', usuario: { id: undefined } };
  }

  createPost(postData: Post): void {
    this.postService.postar(postData).subscribe(
      (newPost: Post) => {
        console.log('Post criado com sucesso:', newPost);
        this.showToast('Post criado com sucesso!', true);
      },
      (error: any) => {
        console.error('Erro ao criar post:', error);
        this.showToast('Erro ao criar post.', false);
      }
    );
  }

  showToast(message: string, isSuccess: boolean) {
    this.toastMessage = message;
    this.isSuccess = isSuccess;

    setTimeout(() => {
      this.toastMessage = null;
    }, 3000); // Dura 3 segundos
  }

  logout(): void {
    localStorage.removeItem('usuarioId');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigateToPosts(): void {
    this.router.navigate(['/posts']);
  }
}
