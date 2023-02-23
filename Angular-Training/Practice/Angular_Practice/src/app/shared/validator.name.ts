import { AbstractControl } from "@angular/forms";

export function NameValidator(control : AbstractControl): {[key : string] : any}  | null {
     const forbidden = (/password/).test(control.value);
     return forbidden ? {forbiddenName : {value : control.value}} : null;
}