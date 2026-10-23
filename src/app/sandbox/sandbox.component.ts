import { Component, signal } from '@angular/core';
import {
  LowerCasePipe, UpperCasePipe, TitleCasePipe, DecimalPipe,
  CurrencyPipe, PercentPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, AsyncPipe, JsonPipe
} from '@angular/common';


@Component({
  selector: 'ab-sandbox',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DecimalPipe, CurrencyPipe, PercentPipe,
    DatePipe, I18nPluralPipe, I18nSelectPipe],
  styleUrl: './sandbox.component.css',
  templateUrl: './sandbox.component.html',
})
export class SandboxComponent {
  // i18nPlural pipe example
  itemCount = signal<number>(0);
  itemMap: { [k: string]: string } = {
    '=0': 'no cheer items =(',
    '=1': '#, We are the Dragons',
    '=2': '#, a little bit louder',
    '=3': '#, I still can\'t hear you',
    'other': '# more' // '#' injects the actual value
  };

  // i18nSelect pipe example
  gender = signal<string>("");
  genderMap: { [key: string]: string } = {
    'male': 'Invite him to the event.',
    'female': 'Invite her to the event.',
    'other': 'Invite them to the event.' // Fallback choice
  };

  // Methods to update the signal value
  addItem() {
    this.itemCount.update(count => count + 1);
  }

  subtractItem() {
    this.itemCount.update(count => count - 1);
  }

  resetItems() {
    this.itemCount.set(0);
  }
}

