import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from 'src/app/rest';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.listProducts()
                        .subscribe(products => this.products = products )



  }

}
