import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control : AbstractControl): {[key : string] : true} | null{
    const Password  = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    return Password && confirmPassword && Password !== confirmPassword ? {"misMatch" : true} : null;
    
}