import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// this is a login page
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      email: ['email', Validators.compose([Validators.maxLength(20), Validators.pattern(''), Validators.required])],
      password: ['', Validators.minLength(8)]
    });
  }
  onLogin(form){
    console.log(this.userForm.value);
  }
}
