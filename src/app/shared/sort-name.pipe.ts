import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
  name: 'sortName',
  pure: true //jak false to co chwilę odświeża
})
export class SortNamePipe implements PipeTransform {

  transform(value: Array<Task>, ...args: unknown[]): Array<Task> {
    return value.sort((a, b)=>{
      if(a.name.toLowerCase()>b.name.toLowerCase()){
        return 1;
      } else {
        return -1;
      }
    });
  }

}
