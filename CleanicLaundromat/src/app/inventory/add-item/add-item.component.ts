import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DetailsService } from 'src/app/self-service/shared/details.service';
import { Inventory } from 'src/app/self-service/shared/inventory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers: [DetailsService]
})
export class AddItemComponent implements OnInit {
  selectedInventory: Inventory;

  constructor(private LaundryService: DetailsService, private toastr: ToastrService, private route: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.LaundryService.postInventory(form.value)
    .subscribe( data => {
      this.toastr.success('New Item Added Successfully!');
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
