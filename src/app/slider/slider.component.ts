import { Component, model } from '@angular/core';

@Component({
  selector: 'ab-slider',
  styleUrl: './slider.component.css',
  templateUrl: './slider.component.html',
})
export class SliderComponent {
  sliderValue = model(0);
}
