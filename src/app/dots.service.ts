import { Injectable } from '@angular/core';
import { Dot } from './dots';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DotsService {
  dotsToRedraw: Dot[];
  numberOfDots = 4;
  indexOfSelectedDot = 2;
  radiusValue = 50;
  // subject is  being used to publish new changes to dotsToRedraw
  private subject = new Subject<any>();

  constructor() { }

  // update dot parameters
  updateDotsParams(numberOfDots, indexOfSelectedDot, radius) {
    this.numberOfDots = numberOfDots;
    this.indexOfSelectedDot = indexOfSelectedDot;
    this.radiusValue = radius;
    // redraw the circles with updated value
    this.populateCircles();

  }

  // method to clear rectangle and redraw circles with new value.
  populateCircles() {
    this.dotsToRedraw = [];
    for (let count = 0; count < this.numberOfDots; count++) {
      if (count === this.indexOfSelectedDot) {
        this.dotsToRedraw.push(new Dot(count, true));
      } else {
        this.dotsToRedraw.push(new Dot(count, false));
      }
    }
    this.sendCircleMetadata(this.dotsToRedraw);
  }

  sendCircleMetadata(message: Dot[]) {
    this.subject.next({ dotMetaData: message });
  }

  getCircleMetadata(): Observable<any> {
    return this.subject.asObservable();
  }

  // dotClicked is called when dotClicked event is raised by child component 
  dotClicked(element) {
    // if same circle is selected increase the radius value
    if (this.indexOfSelectedDot === element.IDOfSelectedDot) {
      this.radiusValue++;
    } else {
      this.indexOfSelectedDot = element.IDOfSelectedDot;
    }

    // clear all selections
    this.populateCircles();
  }
}