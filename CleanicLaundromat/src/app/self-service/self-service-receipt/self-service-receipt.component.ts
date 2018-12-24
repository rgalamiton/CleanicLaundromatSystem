import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/details.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from '../shared/details.model';
import { Inventory } from '../shared/inventory.model';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { SelectItem } from 'primeng/api';



@Component({
  selector: 'app-self-service-receipt',
  templateUrl: './self-service-receipt.component.html',
  styleUrls: ['./self-service-receipt.component.css'],
  providers: [DetailsService]
})
export class SelfServiceReceiptComponent implements OnInit {
  selectedService: Details;
  inventoryService: Inventory;
  getInventoryList: Inventory[]; 
  dataArray: Object[]; 
  id: number;
  eventPackagePrice = [];
  itemTotal: number = 0;
  InitialTotal: number = 0;
  qntty = 0;

  constructor(private LaundryService: DetailsService, private toastr: ToastrService, 
              private _ActivatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit() {
    this.resetForm();
    this.LaundryService.getInventory()
      .subscribe(data =>{
        this.getInventoryList = data
      } );
    
    this._ActivatedRoute.params.subscribe(params => { this.id = params['id']; });
    this.selectedService.cardNum = this.id;
    this.selectedService.beginningBal = 1000;
    this.selectedService.sukiCardNum = this.inventoryService.markUp;

    // TODO: move selectedService outside LaunderyService
  
  }

  increase_quantity(temp_package: Inventory) {
    if (temp_package.quantity == temp_package.markUp) {
      return alert("You reach the maximum unit left for this item");
    } else {
      temp_package.markUp++;
      // this.selectedService.sukiCardNum = temp_package.markUp;
      this.InitialTotal = temp_package.markUp * temp_package.sellingPrice;
      temp_package.profit = this.InitialTotal;
      this.itemTotal += temp_package.sellingPrice;
      this.selectedService.totalAmount = this.itemTotal;
      temp_package.isUpdate = true;
    }
   // console.log("temp_package.quantity: " + temp_package.quantity);
    //console.log("this.selectedService.sukiCardNum: " + this.selectedService.sukiCardNum);
   // console.log("this.InitialTotal: " + this.InitialTotal);
   // console.log("qntty: " + temp_package.markUp);
   // console.log("itemTotal: " + this.itemTotal);

  }

  decrease_quantity(temp_package: Inventory) {
    if (temp_package.markUp == 0) {
      return alert("Can't be in negative")
    } 
    temp_package.markUp--;
    this.InitialTotal = temp_package.markUp * temp_package.sellingPrice;
    temp_package.profit = this.InitialTotal;
    this.itemTotal -= temp_package.sellingPrice;
    this.selectedService.totalAmount = this.itemTotal;
    temp_package.isUpdate = true;
  }

  onSubmit(form: NgForm) {
    const updatedData = this.getUpdatedItems();
    this.LaundryService.postService(this.selectedService)
      .subscribe(data => {
        this.toastr.success('New Transaction Added Successfully!');
        this.route.navigate(['/getSelfService']);
        this.resetForm(form);
      });
  }
  
  getUpdatedItems(): Inventory[]{
    const data: Inventory[] = [];
    for(let e of this.getInventoryList){
      if(e.isUpdate){
        data.push(e);
      }
      
    }
  

    return data;
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.selectedService = {
      id: null,
      name: '',
      contact: '',
      cardNum: null,
      beginningBal: null,
      endingBal: null,
      amountUsed: null,
      sukiCardNum: null,
      hasPromo: '',
      enlistedItems: '',
      transDate: '',
      totalAmount: null,
      remarks: '',
      itemTotal: null
    }
  }

}
