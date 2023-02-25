import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private fb : FormBuilder,private toastr : ToastrService,private service : AuthService, private router : Router){};

registerForm = this.fb.group({
  id: ['',[Validators.required,Validators.minLength(5)]],
  name: ['',[Validators.required]],
  password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
  email: ['',Validators.required,Validators.email],
  gender: ['male'],
  role: [''],
  isactive: [false]
})


proceedRegistration(){
  if(this.registerForm.valid){
      this.service.ProceedRegister(this.registerForm.value).subscribe(
        data => {
          this.toastr.success("Please contact admin for enable access",'registred Successfully');
          this.router.navigate(['login']);
        }
      );
  }
  else{
      this.toastr.warning("Please Eneter valid Data");
  }
}

}
