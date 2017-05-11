import {Component, Input} from '@angular/core';

@Component({
    selector: 'phone-input',
    templateUrl: 'phone-input.component.html',
})

export class PhoneInput {
	 @Input() idsuffix;
	// @Input() ac;
	// @Input() np;
	// @Input() nn;
	@Input() pn;

	public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	private suffix: string;
	
	constructor() { }
	
	ngAfterViewInit(){
	this.suffix = this.idsuffix;
	}
	
	getPN(){
		return "1" + this.pn.replace(/\D+/g, '');
	}
	
	/*processKeyUp(e, elID) {
  	//console.log("in keyup");
  	//console.log(e.target.value.length);
  	//console.log(e.target.maxLength);
  	//angular.element(document.body).find('[tabindex=' + (tabindex+1)
    if(e.target.value.length >= e.target.maxLength) { // you filled the box
    	e.target.blur();
    	console.log("focusing new target");
    	console.log(elID + this.suffix);
      	(<HTMLInputElement>document.getElementById(elID + this.suffix).getElementsByTagName("INPUT")[0]).focus();
    }
  }*/

	
	
}
