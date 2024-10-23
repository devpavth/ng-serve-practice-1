import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user={
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  onSubmit(form: any){
    if(form.valid && this.user.password === this.user.confirmPassword){
      console.log("Form Details:", form);
      console.log("Form Submitted:", this.user);
    }else{
      console.log("Form is invalid.")
    }
  }
}
