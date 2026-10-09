import { Component, signal } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [CatalogComponent],
})
export class App {
  protected readonly title = signal('angular-demo');
}
