import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-self-service',
  templateUrl: './get-self-service.component.html',
  styleUrls: ['./get-self-service.component.css']
})
export class GetSelfServiceComponent implements OnInit {
  selfServiceList: Object;
  constructor( private LaundryService: DetailsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.LaundryService.getSelfService()
    .subscribe(data => this.selfServiceList = data);
  }

  onDelete(id: number){
    if(confirm('Are you sure you want to delete this record?') == true){
      this.LaundryService.deleteService(id)
        .subscribe( x => {
          this.fetchData();
          this.toastr.warning('Successfully deleted the record!', 'Record Deleted');   
        }
      )
    }
  }

  fetchData(){
    this.LaundryService.getSelfService()
    .subscribe(data => this.selfServiceList = data);
  }

 /* onUpdate(data: Object){
    this.LaundryService.updateService(this.data)
    .subscribe();
  }*/
}
