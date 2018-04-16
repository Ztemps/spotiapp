import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})

export class NoimagePipe implements PipeTransform {

  transform(value: any[]): any {
    const noImagePath = 'assets/img/noimage.png';
    if (!value) {
      return noImagePath;
    }
    return (!value || value.length > 0) ?  value[1].url : noImagePath ;
  }

}
