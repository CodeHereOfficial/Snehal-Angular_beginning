import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import productData from '../db.json';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number,
    public discountPercentage: number,
    public rating: number,
    public stock: number,
    public brand: string,
    public category: string,
    public thumbnail: any,
    public images: any
  ) {}
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.httpClient.get<any>('https://dummyjson.com/products').subscribe(
      response => {
        console.log(response);
        this.products = response;
      }
    );
  }
}
