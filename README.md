# Overview 

 A simple interactive UI to generate and select dots with Count , Radius and Selected Value.
 The UI just consists of a rectangle with dots inside of it. There are three inputs controlling the presentation of the dots:

* Count – The number of dots to display

* Selected – The index of a dot that is currently selected

* Radius – The radius of a dot.

# Functionality
* Adjust number of dots  
* Highlight the ‘selected’ dot
* Adjust dot size
* Select a dot
* Select a selected dot

# Demo
The following demonstration provides an overview of the application : Click the image below Alt text
[![Watch the video](/dots-demo-image.png)](https://youtu.be/hIFSRXU_X18)


# Technology 
 Angular 7 with HTML CSS TS 
 
 # Running Code
* To Preview the application open the link : https://angular-ktzw6j.stackblitz.io in Mozilla. 

* Note : Chrome does not support Stackblitz preview ( https://github.com/stackblitz/core/issues/162)
 
 
 # Validation checks
 * Input to be only number 
 * Input to be greater than 0 
 * When number of dots are lesser than selected value , change the selected value to min number of dots.
 * Changes made only on ENTER key press
 
 
 # Running tests
 
 `app.component.spec.ts` contains a basic spec. 
 
 The file has been commented out as stackblitz does not support test framework.


# Alternate approach
Alternate approach would be to use HTML canvas without leveraging the power of Angular.

