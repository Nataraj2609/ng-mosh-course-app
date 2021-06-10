import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderRoutes?: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    let queryParam = this.route.queryParamMap.subscribe(Response => {
      console.log(Response);
    })

    this.route.paramMap.subscribe(params =>{
        console.log(params.get('id'));
        let id = params.get('id');
        console.log(id)
    });

    let queryParamObservable = this.route.queryParamMap;
    let paramMapObservable = this.route.paramMap;

    let posts = this.http.get('https://jsonplaceholder.typicode.com/posts');
    console.log("Hi");
    forkJoin([ posts, posts]).subscribe(results => {
      console.log(results);
      this.orderRoutes = results[0];
    });
  }

}
