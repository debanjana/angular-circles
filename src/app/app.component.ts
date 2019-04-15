import { Component, ViewChild } from '@angular/core';
import { DotsService } from './dots.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberOfDots = 4;
  indexOfSelectedDot = 2;
  radius = 50;

  constructor(private dotsService: DotsService) { }

  ngOnInit() {
    // draw the initial circles
    this.dotsService.populateCircles();
  }


  // method to be called when input value changes for count , selected , radius
  inputChanged(event) {
    // only if ENTER key pressed
    if (event.keyCode === 13) {
      // VALIDATION
      // if number of circle is 0 the selected value with also be zero 
      // the number of circle selected should never be greater than the total number of circles 
      if (this.numberOfDots <= 0) {
        this.indexOfSelectedDot = this.indexOfSelectedDot;
      } else if (this.indexOfSelectedDot >= this.numberOfDots) {
        this.indexOfSelectedDot = this.numberOfDots - 1;
      }
      this.dotsService.updateDotsParams(this.numberOfDots, this.indexOfSelectedDot, this.radius);
    }
  }


  // method that would be called when dotClicked event is raised
  dotClicked(passedValue) {
    this.radius = passedValue.radius;
    this.indexOfSelectedDot = passedValue.IDOfSelectedDot;
    this.dotsService.dotClicked(passedValue);
  }
}

