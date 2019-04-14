import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DotsService {
  selected = [];
  countOfCircle = 4;
  noSelected = 2;
  radiusValue = 50;

  constructor() { }

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
}