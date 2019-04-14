import { Component, ViewChild } from '@angular/core';
import { DotsService } from './dots.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countOfCircle = 4;
  noSelected = 2;
  radiusValue = 50;

  constructor(private dotsService: DotsService) { }

  ngOnInit() {
    // draw the initail circles
    this.dotsService.populateCircles();

  }


  // method to handle input changes
  inputChanged(event) {
    // only if ENTER key pressed
    if (event.keyCode === 13) {

      // update dot params
      this.dotsService.updateDotsParams(this.countOfCircle, this.noSelected, this.radiusValue);


      // VALIDATION
      // if number of circle is 0 the selected value with also be zero 
      // the number of circle selected should never be greater than the total number of circles 
      if (this.dotsService.countOfCircle <= 0) {
        this.dotsService.noSelected = this.dotsService.noSelected;
      } else if (this.dotsService.noSelected >= this.dotsService.countOfCircle) {
        this.dotsService.noSelected = this.dotsService.countOfCircle - 1;
      }

      // redraw the circles with updated value
      this.dotsService.populateCircles();
    }
  }
}

