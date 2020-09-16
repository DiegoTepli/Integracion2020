import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filtersearchemp'
})
export class FilterempsearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    if(arg === '' ||   arg.length < 3) return value;
    const searchemp = [];
    for (const post of value){
      if(post.Apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1)
      {
        searchemp.push(post);
      };
    };
    return searchemp;
  }
}


