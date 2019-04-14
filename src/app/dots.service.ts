import { Injectable } from '@angular/core';
import { Dots } from './dots';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DotsService {
  selected: Array<Dots>[];
  countOfCircle = 4;
  noSelected = 2;
  radiusValue = 50;

  constructor() { }

  // update dot parameters
  updateDotsParams(countOfCircle, noSelected, radiusValue) {
    this.countOfCircle = countOfCircle;
    this.noSelected = noSelected;
    this.radiusValue = radiusValue;

  }

  // method to clear rectangel and redar circles with new value.
  populateCircles(): Observable<any> {
    this.selected = [];
    for (let count = 0; count < this.countOfCircle; count++) {
      if (count === this.noSelected) {
        this.selected.push(new Dots(count, true));
      } else {
        this.selected.push(new Dots(count, false));
      }
    }
    const dotsObservable = new Observable(observer => {

      observer.next(this.selected);

    });
    console.log(this.selected);
    return dotsObservable;
  }
  
  // // update color change expression
  // updateColorChange() : Observable<any>{
  //     const colorChange = new Observable(observer => {

  //     observer.next("'height': this.radiusValue + 'px', 'width': this.radiusValue + 'px'");

  //   });
  //    return colorChange;
  // }

  // dotClicked 
  dotClicked(element) {
    // if same circle is selected increase the radius value
    if (this.noSelected === element.element) {
      this.radiusValue++;
    } else {
      this.noSelected = element.element;
    }

    // clear all selections
    this.populateCircles();
  }
}