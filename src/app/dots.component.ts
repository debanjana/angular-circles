import { Component, Input } from '@angular/core';
import { DotsService } from './dots.service';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent {
  @Input() name: string;

  constructor(private dotsService: DotsService) { }

  ngOnInit() {
  }

  // method to bind the circle style with dynamic radius.
  getExpression() {
    return { 'height': this.dotsService.radiusValue + 'px', 'width': this.dotsService.radiusValue + 'px' }
  }

  // method called when cicle is clicked
  circleClicked(element) {
    // if same circle is selected increase the radius value
    if (this.dotsService.noSelected === element.id) {
      this.dotsService.radiusValue++;
    } else {
      this.dotsService.noSelected = element.id;
    }

    // clear all selections
    this.dotsService.populateCircles();

  }

}
