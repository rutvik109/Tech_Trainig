import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control : AbstractControl): {[key : string] : true} | null{
    const Password  = control.get("password");
    const confirmPassword = control.get("confirmPassword");

    if(Password?.pristine || confirmPassword?.pristine){
        return null;
    }


    return Password && confirmPassword && Password.value !== confirmPassword.value ? {"misMatch" : true} : null;
    
}