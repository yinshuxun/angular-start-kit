import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'maxNum'})
export class MaxNumPipe implements PipeTransform {
  transform(value: number, compare: number): number {
    return Math.max(value,compare)
  }
}
