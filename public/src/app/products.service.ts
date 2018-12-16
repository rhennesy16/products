import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }
  createNewProduct(newProduct){
    return this.http.post('/new', newProduct)
  }
  getAllProducts(){
    return this.http.get('/all')
  }
  getOneProduct(id){
    return this.http.get(`/getOne/${id}`)
  }
  destroy(id){
    return this.http.delete(`/destroy/${id}`)
  }
  editProduct(updatedProduct){
    return this.http.put('/update' ,updatedProduct)
  }
}