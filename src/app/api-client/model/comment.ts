/**
 * Blog API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Usuario } from './usuario';
import { Post } from './post';


export interface Comment { 
    id?: number;
    comentario?: string;
    data?: string;
    tempo?: string;
    post?: Post;
    usuario?: Usuario;
}

