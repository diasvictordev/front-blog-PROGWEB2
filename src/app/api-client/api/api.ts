export * from './commentController.service';
import { CommentControllerService } from './commentController.service';
export * from './postController.service';
import { PostControllerService } from './postController.service';
export * from './usuarioController.service';
import { UsuarioControllerService } from './usuarioController.service';
export const APIS = [CommentControllerService, PostControllerService, UsuarioControllerService];
