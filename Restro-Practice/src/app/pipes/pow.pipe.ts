import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(base : any, exponent : any): unknown {
    return Math.pow(base,exponent);
  }

}
