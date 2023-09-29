import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title: string = "This is not a good Title"

  content: string = "Some content should probably go here"

  isTechRelated: boolean = true
}
