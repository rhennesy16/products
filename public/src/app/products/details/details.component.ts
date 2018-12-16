import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  thisProduct = null;
  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private router: Router) {
                this.route.paramMap.subscribe(
                  params => {
                    console.log("from params in constructor", params.get('id'));
                    this.productsService.getOneProduct(params.get('id'))
                    .subscribe(productReturned =>{
                    this.thisProduct = productReturned
                    })
                  }
                )
               }
  ngOnInit() {
  }
  destroy(id){
    this.productsService.destroy(id)
    .subscribe(
      (data) => {
        console.log("successful deletion", data)
      }
    )
    this.router.navigateByUrl('/')
  }
}