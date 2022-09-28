import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [
    `
    .textColor {
      color: white;
    }
    `
  ]
})
export class DirectivesComponent implements OnInit {

  buttonStatus = false;
  buttonClicks = [];
  increment = 0;
  incrementalStatus = '';

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    // this.increment += 1;
    // this.buttonClicks.push(this.increment);
    this.buttonClicks.push(new Date());
    return this.buttonStatus = !this.buttonStatus;
  }

  setBgColor(index: number){
    this.incrementalStatus = index >= 4 ? 'whiteText' : '';
      return index >= 4 ? 'blue' : 'transparent';
  }

}
