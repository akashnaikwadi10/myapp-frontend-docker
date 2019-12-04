import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prouct-list',
  templateUrl: './prouct-list.component.html',
  styleUrls: ['./prouct-list.component.css']
})
export class ProuctListComponent implements OnInit {

   products:any=[]

  constructor(private service:ProductService) { }

  ngOnInit() {
    this.service
    .getProducts()
    .subscribe((result)=>{
      
      console.log(result)

      this.products = result;
      /*
      if(response['status']==='success'){
          this.products=response['data']as any[]     
      }else{
        console.log('error',response['error'])
      }*/
    })
  }

}
