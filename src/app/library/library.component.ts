import { Component, effect, inject, linkedSignal, signal } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { FormsModule } from '@angular/forms';
import { IBook } from './library.model';

@Component({
  selector: 'ab-library',
  imports: [FormsModule],
  styleUrl: './library.component.css',
  templateUrl: './library.component.html',
})
export class LibraryComponent {

  pageTitle = 'Sample Library';
  private libraryService = inject(LibraryService);

  libraryResource = this.libraryService.getBooks();
  books = this.libraryResource.value;

  selectedAuthor = signal<IBook | undefined>(undefined);

  author = linkedSignal({
    source: this.selectedAuthor,   //source of change
    computation: q => 1             //TODO: reset books to a subset by author
  });
  
  authors: { name: string }[] = [];
  uniqueAuthors: string[] = [];

  // Populate authors list once books are returned
  error = this.libraryResource.error;
  prodEff = effect(() => {
    if (!this.error()) {
      this.authors = this.books().flatMap(book => book.authors) ?? [];
      this.uniqueAuthors = [...new Set(this.authors.map(a => a.name))];

      console.log('Authors', JSON.stringify(this.authors));
      console.log('uniqueCategories', JSON.stringify(this.uniqueAuthors));
    } else {
      console.error('Failed to load books', this.error());
    }
  });
}
