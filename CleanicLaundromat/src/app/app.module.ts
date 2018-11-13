import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelfServiceReceiptComponent } from './self-service/self-service-receipt/self-service-receipt.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddItemComponent } from './inventory/add-item/add-item.component';
import { GetSelfServiceComponent } from './self-service/get-self-service/get-self-service.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    SelfServiceReceiptComponent,
    InventoryComponent,
    AddItemComponent,
    GetSelfServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
