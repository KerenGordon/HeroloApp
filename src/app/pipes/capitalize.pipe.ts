import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Capitalize'
})
export class CapitalizePipe implements PipeTransform {
  // split by words and by letters, check if english letter, if not - remove from word.
  // check if first letter is capitalized, if not - capitalize it. join all the words back together.
  transform(title: any): any {
    if (!title) {return 'N/A'; }
    let words = title.split(' ').filter(word => word.replace(/\s/g, '').length > 0);
    words.forEach((word, index) => {
      let newWord = '';
      word.split('').forEach(char => {
        if (char.replace(/[\W_]+/g, '') !== '') {newWord += char.replace(/[\W_]+/g).toLowerCase(); }
      });
      words[index] =  newWord[0] && newWord[0] !== newWord[0].toUpperCase() ?
      newWord.replace(newWord[0], newWord[0].toUpperCase()) : newWord;
    });
    words = words.filter(word => word.length > 0);
    return words.join(' ');
  }

}
