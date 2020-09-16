import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersearchprod'
})
export class FilterprodsearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    if(arg === '' ||   arg.length < 3) return value;
    const searchprod = [];
    for (const post of value){
      if(post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1)
      {
        searchprod.push(post);
      };
    };
    return searchprod;



  }


  

}