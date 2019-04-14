import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DotsService } from './dots.service';
import { Dots } from './dots';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent {
  dots: Array<Dots>[];
  colorExpression : string;
  @Output() dotClicked: EventEmitter<Dots> = new EventEmitter();

  constructor(private dotsService: DotsService) { }

  ngOnInit() {
    const dotsObservable = this.dotsService.populateCircles().subscribe((dotsArray : Dots[])=> {
      this.dots = dotsArray;
      console.log('dots',this.dots);
    }
    );
  }

  // method to bind the circle style with dynamic radius.
  getExpression() {
    return { 'height': this.dotsService.radiusValue + 'px', 'width': this.dotsService.radiusValue + 'px' }
  }

  // method called when cicle is clicked
  circleClicked(element) {
    this.dotClicked.emit({ element});
  }

}

