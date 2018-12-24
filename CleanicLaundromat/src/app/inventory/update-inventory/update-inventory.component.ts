import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from 'src/app/self-service/shared/inventory.model';
import { DetailsService } from 'src/app/self-service/shared/details.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {
  selectedInventory: Inventory;
  getInventoryList: object;
  itemID: number;
  itemName: string;
  constructor(private LaundryService: DetailsService,private toastr: ToastrService, private route : Router) {}

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this.LaundryService.updateInventory(form.value.itemID, form.value)
    .subscribe( data => {
      this.toastr.success('Updated Successfully!');
      this.resetForm(form);
      this.route.navigate(['/inventory']);
    });
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();
    this.selectedInventory = {
      itemID: null,
      itemName: "",
      category: "",
      sellingPrice: null,
      price: null,
      profit: null,
      sourceStore: "",
      markUp: null,
      inventoryType: "",
      quantity: null,
      isUpdate: false
    }
  }
}
