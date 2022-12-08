//import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrl: './box2.component.css'
})
export class Box2Component {
  @Input() scount: string = 'none';
  @Input() scolor: string = "#DDE";
  @Input() xtabArg: any = {sinfo: 'zero', col: '#CEF'}
  asFilter: string;
  aiCounter1: number;

  constructor(){
    this.aiCounter1 = 0;
    this.asFilter = "";
  }

  field_info1 = 'C12';
  field_info2 = 'in some code editor or IDE like PhpStorm';
  car = new cCar('Ford Focus','blue', 65000);

  filterResults(text: string) {
    if (text != "") {
      this.aiCounter1 ++;
      this.asFilter = text;
    }
  }

}

class cCar {
  public name: string = '';
  public color: string = '';
  public mileage: number = 0;

  constructor(xname: string, xcolor: string, xmileage: number ) {
    this.name = xname;
    this.color = xcolor;
    this.mileage = xmileage;
  }
}

