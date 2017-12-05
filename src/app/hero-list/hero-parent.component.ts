import {Component, NgModule, OnInit} from '@angular/core';
import Heros from './heros'

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child
      *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
  `
})

export class HeroParent {
  heroes = Heros;
  master = 'master'
}
