import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS}  from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelfServiceReceiptComponent } from './self-service/self-service-receipt/self-service-receipt.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddItemComponent } from './inventory/add-item/add-item.component';
import { GetSelfServiceComponent } from './self-service/get-self-service/get-self-service.component';
import { TablefilterComponent } from './tablefilter/tablefilter.component';
import { UpdateServiceComponent } from './self-service/update-service/update-service.component';
import { UpdateInventoryComponent } from './inventory/update-inventory/update-inventory.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { HomebuttonsComponent } from './home/homebuttons/homebuttons.component';
import { DetailsService } from './self-service/shared/details.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    SelfServiceReceiptComponent,
    InventoryComponent,
    AddItemComponent,
    GetSelfServiceComponent,
    TablefilterComponent,
    UpdateServiceComponent,
    UpdateInventoryComponent,
    SignUpComponent,
    SignInComponent,
    UserhomeComponent,
    HomebuttonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    ToastrModule.forRoot()
  ],
  providers: [DetailsService, AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
