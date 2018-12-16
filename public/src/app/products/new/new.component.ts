import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors: string[] = [];
  newProduct:any = {
    name: '',
    qty: '',
    price: ''
  }
  constructor(private productsService: ProductsService,
              private router: Router) { }
  ngOnInit() {
  }
  submitNewProduct(){
    console.log(this.newProduct)
    this.productsService.createNewProduct(this.newProduct)
    .subscribe(
      (response:any) =>{
        console.log(response)
        console.log("it worked")
        if(response.error){
          console.log(response.error)
          this.errors = response.error
        }
        else{
          this.newProduct = {
            name: '',
            qty: '',
            price: '',
          } 
          this.router.navigateByUrl('/')
        }
      },
      (err) => {
        console.log(err)
      }
    )
  }
}