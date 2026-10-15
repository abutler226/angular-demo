import { Component, effect, inject } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { FormsModule } from '@angular/forms';

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
  selectedAuthor =this.libraryService.selectedAuthor;//wiring up with service to make this signal available to review service


  //debugging using effect()
  qtyEffect = effect(() => console.log('books: ', this.books));
}
