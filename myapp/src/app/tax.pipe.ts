import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(sal:number): number {
    let r=(sal*0.1)
    return r;
  }

}
