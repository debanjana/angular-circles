import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DotsService } from './dots.service';
import { Dots } from './dots';
import { Observable ,Subscription} from 'rxjs';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent implements OnInit{
  dots: Dots[];
  @Output() dotClicked: EventEmitter<Dots> = new EventEmitter();
  subscription: Subscription;

  constructor(private dotsService: DotsService) {
      this.subscription = this.dotsService.getCircleMetadata().subscribe(dotsArray => {
          if (dotsArray) {
            this.dots = dotsArray.dotMetaData;
          }});
  }

  ngOnInit() {

  }

  // method to bind the circle style with dynamic radius.
  getExpression() {
    return { 'height': this.dotsService.radiusValue + 'px', 'width': this.dotsService.radiusValue + 'px' }
  }

  // method called when cicle is clicked by user on HTML component
  circleClicked(element) {
    this.dotClicked.emit({IDOfSelectedDot :element, radius : this.dotsService.radiusValue});
  }

}

