import { Component, Input, ViewChild } from '@angular/core';
import { PhoneInput } from '../phone-input.component';

@Component({
    selector: 'contactMethod',
    templateUrl: 'contactMethod.component.html'
})

export class ContactMethod {

  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  @Input('email') pcmethod: string;
  @Input('emailValue') pcvalue: string;
  // @Input('smsMobileNumberAreaCode') mobileNumberAreaCode : string;
  // @Input('smsMobileNumberPrefix') mobileNumberPrefix : string;
  // @Input('smsMobileNumberLineNumber') mobileNumberLineNumber : string;
  @Input('pn') mobile: string;
  @ViewChild('phoneinput') mobilenumber: PhoneInput;
constructor(){}

}
