import { Component, signal } from '@angular/core';
import {
  LowerCasePipe, UpperCasePipe, TitleCasePipe, DecimalPipe, 
  CurrencyPipe, PercentPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, AsyncPipe, JsonPipe
} from '@angular/common';


@Component({
  selector: 'ab-sandbox',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DecimalPipe, CurrencyPipe, PercentPipe, 
    DatePipe, I18nPluralPipe, I18nSelectPipe, AsyncPipe, JsonPipe],
  styleUrl: './sandbox.component.css',
  templateUrl: './sandbox.component.html',
})
export class SandboxComponent {
 
}

