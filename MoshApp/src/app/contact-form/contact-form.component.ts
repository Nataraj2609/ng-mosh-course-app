import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    { id:1, name:'email' },
    { id:2, name:'phone' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sayH(hello: any){
    console.log(hello);
  }

  onSubmit(f:any){
    console.log(f);
  }
}
