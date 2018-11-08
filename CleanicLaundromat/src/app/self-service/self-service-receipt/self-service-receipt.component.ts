import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/details.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
//import { fillProperties } from '@angular/core/src/util/property';
//import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Details } from '../shared/details.model';


@Component({
  selector: 'app-self-service-receipt',
  templateUrl: './self-service-receipt.component.html',
  styleUrls: ['./self-service-receipt.component.css'],
  providers: [DetailsService]
})
export class SelfServiceReceiptComponent implements OnInit {

  constructor(private LaundryService: DetailsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    //this.LaundryService.getSelfService()
    //.subscribe(data => this.getData = data);
  }


  onSubmit(form: NgForm){
    console.log(form.value);
    this.LaundryService.postService(form.value)
    .subscribe( data => {
      this.toastr.success('New Transaction Added Successfully!', 'New Transaction');
      this.resetForm(form);
    });
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();
    this.LaundryService.selectedService = {
      id : null,
      name: '',
      contact: '',
      cardNum: null,
      beginningBal: null,
      endingBal: null,
      amountUsed: null,
      sukiCardNum : null,
      hasPromo : '',
      enlistedItems : '',
      transDate : '',
      totalAmount : null,
      remarks : ''
    }
  }
 
}
