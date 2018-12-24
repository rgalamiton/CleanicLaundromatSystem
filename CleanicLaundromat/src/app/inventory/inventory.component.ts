import { Component, OnInit, Input } from '@angular/core';
import { DetailsService } from '../self-service/shared/details.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Inventory } from '../self-service/shared/inventory.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  getInventoryList: object;
  @Input() inventory : Inventory;

  constructor(private LaundryService: DetailsService, private toastr: ToastrService, private router : Router ) { }

  ngOnInit() {
    this.LaundryService.getInventory()
    .subscribe(data => this.getInventoryList = data );
  }

  onDelete(id: number){
    if(confirm('Are you sure you want to delete this record?') == true){
      this.LaundryService.deleteInventory(id)
        .subscribe( x => {
          this.fetchData();
          this.toastr.warning('Successfully deleted the record!', 'Record Deleted'); 
        }
      )
    }
  }

  fetchData(){
    this.LaundryService.getInventory()
    .subscribe(data => this.getInventoryList = data );
  }

  onUpdate(inventory: Inventory){
    this.LaundryService.getInventoryList = Object.assign({},inventory);
    this.router.navigate(['/updateInventory']);
  }

}
