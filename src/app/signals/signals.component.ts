import { Component, signal } from '@angular/core';

@Component({
  selector: 'ab-signals',
  standalone: false,
  styleUrl: './signals.component.css',
  templateUrl: './signals.component.html',
})
export class SignalsComponent {
  x = signal(5);
  y = signal(3);
  z=this.x()+this.y();

  xStatic = 5;
  yStatic = 3;
  zStatic = this.xStatic + this.yStatic;

  ex1 = '';
  ex2 = '';
  ex3 = '';

  onlyNumbers = /^\d+$/;

  runExample1() {
    this.zStatic = this.xStatic + this.yStatic;
    this.logStaticValues();
    this.ex1 = this.zStatic.toString();
  }
  runExample2() {
    this.xStatic = 10;
    console.log(this.zStatic);

    this.ex2 = this.zStatic.toString();
  }
  runExample3() {

  }

  logStaticValues() {
    console.log('x:' + this.xStatic + '|y:' + this.yStatic + '|' + 'z:' + this.zStatic);
  }
  logSignalValues() {
    //console.log('x:' + this.x() + '|y:' + this.y() + '|' + 'z:' + this.z());
    console.log('x:' + this.x() + '|y:' + this.y());
  }

  updateValueX(event: Event) {
    // Cast the event target to an HTMLInputElement to access .value safely
    const element = event.target as HTMLInputElement;
    this.xStatic = Number(element.value);
  }
}

