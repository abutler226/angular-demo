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
  //booksByAuthor = signal(this.books().values);//create new signal based on books value, don't assign to books signal

  //selectedAuthor = this.libraryService.selectedAuthor;
  selectedAuthor = signal<string | "">("");
  booksByAuthor = linkedSignal({
    source: this.selectedAuthor,   //source of change
    computation: b => this.getBooksBySelectedAuthor() //update booksByAuthor
  });

  authors: { name: string }[] = [];
  uniqueAuthors: string[] = [];

  getBooksBySelectedAuthor() {
    if (this.selectedAuthor() == "")
      return this.books();

    //filter book list by selected author
    //this isn't filtering as I expect.  Will revisit, but using a forEach instead for now
    //var newBooks = this.books().filter(b => b.authors.filter(a => a.name === this.selectedAuthor()));
    //console.log('newBooks', newBooks.length);
    //return newBooks;//this.books().filter(b=>b.authors.filter(a=>a.name===this.selectedAuthor()));

    var newBooks: IBook[] = [];
    this.books().forEach(b => {
      if (b.authors.find(a => a.name === this.selectedAuthor() || this.selectedAuthor() === ""))
        newBooks.push(b);
    });

    // //error at sub.push
    // var newBooks: IBook[] = this.books().reduce((sub, book) => {
    //   if(book.authors.find(b=>b.name===this.selectedAuthor()))
    //       sub.push(book);
    //   return sub;
    // }, {} as IBook[]);

    return newBooks;
  }

  // Populate authors lists once books are returned
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
