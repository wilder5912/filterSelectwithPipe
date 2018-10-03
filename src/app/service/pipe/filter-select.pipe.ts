import { Pipe, PipeTransform } from '@angular/core';
/*//import * as _ from 'lodash';*/
@Pipe({
  name: 'filterSelect'
})
export class FilterSelectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
/*console.log("xxx",value,"----------", args);*/
    let listData = null;
      if (value) {
        listData = value.filter(row => Number(row.countryid) === Number(args)  );
      }
      /*console.log(listData);*/
    return listData;
  }

}
