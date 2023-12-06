import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListBooksComponent } from '../../../public-api';

@Component({
  selector: 'ncls-pages-list-books',
  standalone: true,
  imports: [CommonModule, ListBooksComponent],
  templateUrl: './pages-list-books.component.html',
  styleUrl: './pages-list-books.component.css'
})
export class PagesListBooksComponent {

}
