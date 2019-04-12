import { Component , ViewChild} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  // @ViewChild ('myCanvas') canvasElement;
  selected = [];
  countOfCircle = 4;
  noSelected = 2;
  radiusValue = "50";
  // 'height' : 5px ; width = 5px;

  // canvas setup
  getExpression(){
return {'height' : this.radiusValue +'px' , 'width' : this.radiusValue +'px' }
  }
  

  

  ngOnInit(){
    //this.selected.length = 4;
     this.populateCircles();

  }

  populateCircles(){
    this.selected =[];
    for (let count=0 ; count<this.countOfCircle; count++){
      this.selected[count] = {
        'id': count,
        'isSelected': false
      };
    }
    this.selected[this.noSelected].isSelected= true; 
  }

circleClicked (element){
  // clear all selections
  this.noSelected = element.id;
  this.populateCircles();
  // select one
  //this.selected[element.id].isSelected = true;
  
}
inputChanged(){
   console.log(this.noSelected , this.countOfCircle);
  if(this.countOfCircle <= 0){
    this.noSelected = this.noSelected;
  } else if( this.noSelected >= this.countOfCircle){
     console.log('yes');
    this.noSelected = this.countOfCircle - 1;
  }

this.populateCircles(); 
}

}

