import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';
  count:number=0;

  reset(){
    this.count=0;
  }
  add(){
    this.count=this.count+1
  }
  minus(){
    this.count=this.count-1
  }
}
