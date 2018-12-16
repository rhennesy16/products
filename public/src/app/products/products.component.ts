import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  allProducts: any = []
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAllProducts()
    .subscribe(
      (data) => {this.allProducts = data}
    )
  }
}