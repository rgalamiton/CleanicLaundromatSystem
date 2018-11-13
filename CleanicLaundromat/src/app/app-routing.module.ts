import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfServiceComponent} from './self-service/self-service.component';
import { DropOffComponent } from './drop-off/drop-off.component';
import { SelfServiceReceiptComponent } from './self-service/self-service-receipt/self-service-receipt.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddItemComponent } from './inventory/add-item/add-item.component';
import { GetSelfServiceComponent } from './self-service/get-self-service/get-self-service.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},  
  {path: 'self-service', component: SelfServiceComponent},  
  {path: 'drop-off', component: DropOffComponent },
  {path: 'self-service-receipt/:id', component:  SelfServiceReceiptComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'getSelfService', component: GetSelfServiceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SelfServiceComponent, DropOffComponent, SelfServiceReceiptComponent, 
                                  InventoryComponent, AddItemComponent, GetSelfServiceComponent]
