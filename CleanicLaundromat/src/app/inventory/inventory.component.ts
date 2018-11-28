import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../self-service/shared/details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  getInventoryList: object;
  constructor(private LaundryService: DetailsService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.LaundryService.getInventory()
    .subscribe(data => this.getInventoryList = data );
  }

  onDelete(id: number){
    if(confirm('Are you sure you want to delete this record?') == true){
      this.LaundryService.deleteInventory(id)
        .subscribe( x => {
          this.toastr.warning('Successfully deleted the record!', 'Record Deleted');
          this.LaundryService.getSelfService();
        }
      )
    }
  }

}
