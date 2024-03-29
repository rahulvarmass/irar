import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
item: any;
// available: any;

  constructor() { }

  ngOnInit(): void {
  }

  products =[
     {id:1, name: "Thailam", price:100, color:"green", availability:"available", image: ''},
     {id:2, name: "lip balm", price:40, color: "green", availability:"available", image:''},
     {id:3, name:"body cream", price:220, color: "yellow", availability:"not available", image:''},
     {id:4, name:"books", price:220, color: "brown", availability:"not available", image:''},
     {id:5, name:"jacket", price:1000, color: "unsaturated indian blue", availability:"not available", image:'/assets/wintercoat.jpg'},
     {id:6, name:"manja thool", price:10, color: "yellow", availability:"available", image:'/assets/turmeric.jfif'},
  ]


}
