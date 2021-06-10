import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  counterValue = 1;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  increase() {
    this.counterValue++;
  }

  decrease() {
    if (this.counterValue > 1)
      this.counterValue--;
    else
      this.counterValue = 1;
  }

  submit(){
    console.log('Qty '+ this.counterValue);
    this.route.navigate(['/order', 1], {
      queryParams: { page:1, sort: 'asc'}
    });
  }
}
