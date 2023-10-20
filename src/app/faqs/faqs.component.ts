import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  contactForm: FormGroup;

constructor(private fb: FormBuilder){
this.contactForm = fb.group({
  companyName: ['', Validators.required],
      fullName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
})
}
onSubmit() {
  if (this.contactForm.valid) {
    console.log(this.contactForm.value);
  }
}
}
