import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Capitalize'
})
export class CapitalizePipe implements PipeTransform {
  
  // creates an array of words (seperated by comma), remove unnecessary spaces,
  // remove all non-letters chars, lowercase it, uppercase first letter.
  // remove all empty 'words' and join it all back.
  transform(title: any): any {
    if (!title) return 'N/A';
    let uppercased = title.split(' ').filter(word => word.replace(/\s/g, '').length > 0)
    uppercased.forEach((word, index) => {
      uppercased[index] = word.replace(/\W/g, '')
      .toLowerCase()
      .replace(word[0], word[0].toUpperCase());
      
      if (uppercased[index] < 1) uppercased.splice(index, 1);
      });
      return uppercased.join(' ');
    }
    
  }
  