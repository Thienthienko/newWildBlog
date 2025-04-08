import { Component } from '@angular/core';
import { Article } from "../../models/article.model";

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {
  imageSrc: string = 'https://via.placeholder.com/350x150';

  article: Article = {
    id: 0,
    title: 'Titre de l\'article',
    content: 'Voici le contenu de l\'article.',
    image: 'https://placehold.co/150x150',
    createdAt: new Date(),
    isPublished: false,
    likeCount: 0,
    categoryName: 'Angular',
    isLiked: true,
  };
}
