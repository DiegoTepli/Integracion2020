import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterventasearchprod'
})
export class FilterventasearchprodPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    if(arg === '' ||   arg.length < 3) return value;
    const searchventaprod = [];
    for (const post of value){
      if(post.Producto.toLowerCase().indexOf(arg.toLowerCase()) > -1)
      {
        searchventaprod.push(post);
      };
    };
    return searchventaprod;
  }
}
