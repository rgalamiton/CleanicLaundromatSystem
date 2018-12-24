import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfServiceComponent } from './self-service/self-service.component';
import { DropOffComponent } from './drop-off/drop-off.component';
import { SelfServiceReceiptComponent } from './self-service/self-service-receipt/self-service-receipt.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddItemComponent } from './inventory/add-item/add-item.component';
import { GetSelfServiceComponent } from './self-service/get-self-service/get-self-service.component';
import { HomeComponent } from './home/home.component';
import { TablefilterComponent } from './tablefilter/tablefilter.component';
import { UpdateServiceComponent } from './self-service/update-service/update-service.component';
import { UpdateInventoryComponent } from './inventory/update-inventory/update-inventory.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomebuttonsComponent } from './home/homebuttons/homebuttons.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'homebuttons', component: HomebuttonsComponent, canActivate: [AuthGuard]},
  { path: 'self-service', component: SelfServiceComponent, canActivate: [AuthGuard] },
  { path: 'drop-off', component: DropOffComponent, canActivate: [AuthGuard] },
  { path: 'self-service-receipt/:id', component: SelfServiceReceiptComponent, canActivate: [AuthGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
  { path: 'create', component: AddItemComponent, canActivate: [AuthGuard] },
  { path: 'getSelfService', component: GetSelfServiceComponent, canActivate: [AuthGuard] },
  { path: 'tableFilter', component: TablefilterComponent, canActivate: [AuthGuard] },
  { path: 'updateSelfService/:id', component: UpdateServiceComponent, canActivate: [AuthGuard] },
  { path: 'updateInventory', component: UpdateInventoryComponent, canActivate: [AuthGuard] },
  { path: 'userHome', component: UserhomeComponent, canActivate: [AuthGuard] },

  {
    path: 'signup', component: UserhomeComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserhomeComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SelfServiceComponent, DropOffComponent, SelfServiceReceiptComponent,
                                  InventoryComponent, AddItemComponent, GetSelfServiceComponent, TablefilterComponent,
                                  UpdateServiceComponent, UpdateInventoryComponent, SignUpComponent, UserhomeComponent,
                                  SignInComponent, HomebuttonsComponent]
