import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div>
      hello {{title}}
      <p>The hero's birthday is {{ birthday | date:format | uppercase}}</p>
      <p (click)="toggleFormat()">Toggle format</p>
      <p>My current age is {{12 | maxNum: 14}}</p>
    </div>
  `
})
export class UserComponent implements OnInit, OnChanges {
  title: string = 'yinshuxun';
  birthday: Date = new Date('1993-05-23');
  tigger: Boolean = false

  constructor() {
  }

  ngOnChanges() {
    console.log('onChange')
  }

  ngOnInit() {
    console.log('onInit')
  }

  ngDoCheck() {
    console.log('DoCheck')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('AfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }

  ngOnDestroy() {
    console.log('OnDestroy')
  }


  get format() {
    return this.tigger ? 'shortDate' : 'fullDate'
  }

  toggleFormat() {
    this.tigger = !this.tigger
  }
}
