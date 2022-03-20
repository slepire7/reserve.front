import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name: 'FormatarData'
})

export class FormatarData implements PipeTransform {
  transform(value: string): string {
    console.log("sss", value)
    if (!!value) {
      var valores = value.split('T')[0].split('-');
      return `${valores[2]}/${valores[1]}/${valores[0]}`
    }
    return ' - ';
  }

}
