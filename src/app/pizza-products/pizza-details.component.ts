import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPizzaProduct } from './pizza-products';
import { ProductService } from './pizza.service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {

  pizza: IPizzaProduct | undefined;
  pageTitle:string='Pizza Detail';
  constructor(private route:ActivatedRoute,
    private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    this.pageTitle+=`: ${id}`;
    this.pizza={
      "productId": 1,
      "productName": " COMING SOON !!",
      "productCode": "AF-123",
      "productStatus": 1,
      "description": "Delightful combination of onion, capsicum, tomato & grilled mushroom",
      "price": 459,
      "starRating": 2.3,
      "imageUrl": "assets/images/stay_tuned.jpg"
    }
  }

  onBack():void{
    this.router.navigate(['/pizzas'])
  }

 

}
