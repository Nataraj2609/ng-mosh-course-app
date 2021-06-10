import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moshAppNew';
  personArgs = {name:'Iron Man'};
  fetchedFromTaskComponent!: string;

  setField(data: string){
    console.log("I am called",data);
    this.fetchedFromTaskComponent = data;
  }
}
