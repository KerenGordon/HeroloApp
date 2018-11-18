import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Capitalize'
})
export class CapitalizePipe implements PipeTransform {
  // split by words and by letters, check if english letter, if not - remove from word.
  // check if first letter is capitalized, if not - capitalize it. join all the words back together.
  transform(title: any): any {
    if (!title) return 'N/A';
    let uppercased = title.split(' ').filter(word => word.replace(/\s/g, '').length > 0)
    uppercased.forEach((word, index) => {
      let newWord = '';
      word.split('').forEach(char => {
        if (char.replace(/[\W_]+/g, '') !== '') newWord += char.replace(/[\W_]+/g).toLowerCase(); 
      });
      uppercased[index] =  newWord[0] && newWord[0] !== newWord[0].toUpperCase() ? newWord.replace(newWord[0], newWord[0].toUpperCase()) : newWord;
    });
    return uppercased.join(' ');
  }
  
}