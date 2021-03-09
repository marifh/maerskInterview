import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, seachTerm: any): any {
    return value.filter(function(search:any){
      return search.productName.toLowerCase().indexOf(seachTerm.toLowerCase()) > -1 || 
      search.proCode.toLowerCase().indexOf(seachTerm.toLowerCase()) > -1 
    });
  }

}
