import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseStrings'
})
export class UppercaseStringsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
