import { Component, signal } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
//import { AppRoutingModule } from './app-routing-module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [RouterOutlet, CatalogComponent],
})
export class App {
  protected readonly title = signal('angular-demo');
}
