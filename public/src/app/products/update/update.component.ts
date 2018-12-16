import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  errors: string[] = [];
  thisProduct = null;
  updatedProduct:any= null;
  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private router: Router) {
                this.route.paramMap.subscribe(
                  params => {
                    console.log("from params in constructor", params.get('id'));
                    this.productsService.getOneProduct(params.get('id'))
                    .subscribe(productReturned =>{
                      this.thisProduct = productReturned
                      this.updatedProduct = {
                        name: this.thisProduct.name,
                        qty: this.thisProduct.qty,
                        price: this.thisProduct.price,
                        _id: this.thisProduct._id
                      }
                    })
                  }
                )
              }
  ngOnInit() {
  }
  updateProduct(){
    console.log(this.updatedProduct)
    this.productsService.editProduct(this.updatedProduct)
    .subscribe(
      (response:any) =>{
        console.log(response)
        console.log("it worked")
        if(response.error){
          console.log(response.error)
          this.errors = response.error
        }
        else{
        this.router.navigateByUrl('/')
        }
      },
      (err) => {
        console.log(err)
      }
    )
  }
}