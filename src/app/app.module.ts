import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-products/pizza-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzaDetailsComponent } from './pizza-products/pizza-details.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './pizza-products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    PizzaDetailsComponent,
    WelcomeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'pizzas' ,component:PizzaListComponent},
      {path: 'pizzas/:id',
      canActivate:[ProductDetailGuard],
      component: PizzaDetailsComponent},
      {path: 'welcome' ,component: WelcomeComponent },
      { path : '', redirectTo:'welcome',pathMatch:'full'},
      { path : '*',redirectTo:'welcome',pathMatch:'full'}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
