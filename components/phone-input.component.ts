import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'phone-input',
    templateUrl: 'phone-input.component.html',
})

export class PhoneInput {
	@Input() idsuffix;
	@Input() pn;
<<<<<<< HEAD
	public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
=======

	public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
>>>>>>> 83e4a87ca5edd35b84ccf922181e3a56bdd24591
	private suffix: string;
	@Output() mobileValueChanged = new EventEmitter();
	@Output() mobileValueBlur = new EventEmitter();
	constructor() { }
	
	ngAfterViewInit(){
	this.suffix = this.idsuffix;
	}

	inputBlurred(event) {
		this.mobileValueBlur.emit(event);
	}
	
	getPN(){
		if (this.pn && this.pn!='') {
			return "1" + this.pn.replace(/\D+/g, '').slice(0,10);
		}
		return '';
	}

	emitMobileChanged(evt) {
		//console.log("emitting mobile change", this.getPN());
		this.mobileValueChanged.emit(this.getPN());
	}
	
}
