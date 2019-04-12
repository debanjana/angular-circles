import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = [];
  countOfCircle = 4;
  noSelected = 2;
  radiusValue = 50;

// method to bind the circle style with dynamic radius.
  getExpression() {
    return { 'height': this.radiusValue + 'px', 'width': this.radiusValue + 'px' }
  }




  ngOnInit() {
    // draw the initail circles
    this.populateCircles();

  }

// method to clear rectangel and redar circles with new value.
  populateCircles() {
    this.selected = [];
    for (let count = 0; count < this.countOfCircle; count++) {
      this.selected[count] = {
        'id': count,
        'isSelected': false
      };
    }
    this.selected[this.noSelected].isSelected = true;
  }

// method called when cicle is clicked
  circleClicked(element) {
    // if same circle is selected increase the radius value
    if (this.noSelected === element.id) {
      this.radiusValue++;
    } else {
      this.noSelected = element.id;
    }

    // clear all selections
    this.populateCircles();

  }

  // method to handle input changes
  inputChanged(event) {
    // VALIDATION
    // if number of circle is 0 the selected value with also be zero 
    // the number of circle selected should never be greater than the total number of circles 
    // only if ENTER key pressed
    if(event.keyCode === 13){
    if (this.countOfCircle <= 0) {
      this.noSelected = this.noSelected;
    } else if (this.noSelected >= this.countOfCircle) {
      this.noSelected = this.countOfCircle - 1;
    }

    // redraw the circles with updated value
    this.populateCircles();
  }
  }
}

