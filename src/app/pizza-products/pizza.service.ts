import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError} from "rxjs";
import { IPizzaProduct } from "./pizza-products";

@Injectable({
    providedIn:'root'
})
export class ProductService {

  private productUrl='api/pizzas/pizzas.json'
  constructor(private http: HttpClient){

  }
  getPizzaProducts(): Observable<IPizzaProduct[]>{
    // return[
    //     {
    //         "productId": 1,
    //         "productName": "Farmhouse",
    //         "productCode": "AF-123",
    //         "productStatus":1,
    //         "description": "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    //         "price" : 459,
    //         "starRating": 2.3,
    //         "imageUrl": "assets/images/farmhouse.jpg"
    //       },
    //       {
    //         "productId": 2,
    //         "productName": "The 4 Cheese Pizza",
    //         "productCode": "JK-783",
    //         "productStatus":1,
    //         "description": "Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost",
    //         "price" : 639,
    //         "starRating": 4.7,
    //         "imageUrl": "assets/images/cheese.jpg"
    //       },
    // ]

    return this.http.get<IPizzaProduct[]>(this.productUrl).pipe(tap(data=>console.log('All',JSON.stringify(data))),
    catchError(this.handleError))
    ;
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}