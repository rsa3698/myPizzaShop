import { Component, OnInit } from "@angular/core";
import { IPizzaProduct } from "./pizza-products";
import { ProductService } from "./pizza.service";


@Component({
    selector: 'ps-pizza',
    templateUrl : './pizza-list.component.html',
    styleUrls: ['/pizza-list.component.css',]
})

export class PizzaListComponent implements OnInit{
    pageTitle : string ='Pizza-List';
    imageWidth : number =200;
    imageMargin : number=2;
    showImage: boolean=false;
   
    private _listfilter: string ='';
    errorMessage: string='';
    get listFilter():string {
        return this._listfilter;
    }
    set listFilter(value:string){
        this._listfilter=value;
        console.log('In Setter : ',value);
        this.filteredPizzas=this.performFilter(value);

    }

    constructor(private productService:ProductService){}

    filteredPizzas: IPizzaProduct[]=[];

    pizzas: IPizzaProduct[]=[
        // {
        //   "productId": 1,
        //   "productName": "Farmhouse",
        //   "productCode": "AF-123",
        //   "productStatus":1,
        //   "description": "Delightful combination of onion, capsicum, tomato & grilled mushroom",
        //   "price" : 459,
        //   "starRating": 2.3,
        //   "imageUrl": "assets/images/farmhouse.jpg"
        // },
        // {
        //   "productId": 1,
        //   "productName": "The 4 Cheese Pizza",
        //   "productCode": "JK-783",
        //   "productStatus":1,
        //   "description": "Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost",
        //   "price" : 639,
        //   "starRating": 4.7,
        //   "imageUrl": "assets/images/cheese.jpg"
        // },
    ];

    toggleImage(): void {
        this.showImage=!this.showImage;
    }

    ngOnInit(): void {
      this.productService.getPizzaProducts().subscribe({
        next: pizzas=>{
            this.pizzas=pizzas;
            this.filteredPizzas=this.pizzas;
        },
        error: err=>this.errorMessage=err
      });
      
    }

    performFilter(filterBy:string):IPizzaProduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.pizzas.filter((pizzas : IPizzaProduct)=>
        pizzas.productName.toLocaleLowerCase().includes(filterBy));
    }

    onRatingClicked(message: string):void {
          this.pageTitle='Product List : '+message;
    }

}