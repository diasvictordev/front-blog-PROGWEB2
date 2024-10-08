import { Component, OnInit } from '@angular/core';
import { Post, PostControllerService } from 'src/app/api-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagemposts',
  templateUrl: './listagemposts.component.html',
  styleUrls: ['./listagemposts.component.css']
})
export class ListagempostsComponent implements OnInit {
  posts: Post[] = [];
  loggedUserId: number | null = null;

  constructor(private postService: PostControllerService, private router: Router) {}

  ngOnInit(): void {
    this.loggedUserId = Number(localStorage.getItem('usuarioId')); // Obtendo o ID do usuário logado
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.listarPosts().subscribe(
      (data: any) => {
        const reader = new FileReader();
        reader.onload = () => {
          const jsonData = JSON.parse(reader.result as string);
          if (Array.isArray(jsonData)) {
            this.posts = jsonData as Post[];
          } else {
            console.error('Dados recebidos não são um array:', jsonData);
          }
        };
        reader.readAsText(data as Blob);
      },
      (error: any) => {
        console.error('Erro ao buscar posts:', error);
      }
    );
  }

  deletePost(postId: number): void {
    if (confirm('Tem certeza que deseja deletar este post?')) {
      this.postService.deletar1(postId).subscribe(
        () => {
          this.posts = this.posts.filter(post => post.id !== postId);
          console.log('Post deletado com sucesso');
        },
        (error: any) => {
          console.error('Erro ao deletar post:', error);
        }
      );
    }
  }

  logout(): void {
    localStorage.removeItem('usuarioId');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigateToCreatePost(): void {
    this.router.navigate(['/cadastroposts']);
  }
}
