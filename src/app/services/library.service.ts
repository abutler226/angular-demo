import { Injectable, signal } from "@angular/core";
import { IBook } from "../library/library.model";
import { httpResource } from "@angular/common/http";
import sampleBooks from '../library.json'

@Injectable({
    providedIn: 'root'
})
export class LibraryService {
    private libraryUrl = 'https://gutendex.com/books/?ids=71,11,12,13,60600';
    private defaultBooks = sampleBooks;

    // Signals to support the template
    //selectedAuthor = signal<string | "">("");

    getBooks(){
        return httpResource<IBook[]>(() => this.libraryUrl, { 
            defaultValue: this.defaultBooks as IBook[],
            parse: (rawData: any) => rawData?.results ?? this.defaultBooks
         });
    }
}