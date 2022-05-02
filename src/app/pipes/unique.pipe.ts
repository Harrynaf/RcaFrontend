import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'unique',
  pure: false
})

export class UniquePipe implements PipeTransform {
  transform(value: any, args?: any): any {

    // Remove the duplicate elements (this will remove duplicates
    let uniqueArray = value.filter(function (el: any, index: any, array: string | any[]) { 
      return array.indexOf (el) == index;
    });

  return uniqueArray;   } 
}