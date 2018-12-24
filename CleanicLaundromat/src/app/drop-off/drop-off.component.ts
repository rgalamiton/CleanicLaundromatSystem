import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../self-service/shared/details.service';

@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.component.html',
  styleUrls: ['./drop-off.component.css']
})
export class DropOffComponent implements OnInit {
  Price : number = 0;
  category = ["Regular", "Titan"];

  packagesArray: any[] = [
    {
      'price' : 60, 'limit' : 1000,quantity : 0
    },
    {
      'price' : 100, 'limit' : 1000,quantity : 0
    }
  ]
  constructor(private LaundryService: DetailsService) { }

  ngOnInit() {
    
  }
  
  increase_quantity(temp_package){
    if(temp_package.limit == temp_package.quantity){
      return alert("Can't add more")
    }else{
      temp_package.quantity++
      this.Price += temp_package.price
    }
  }

  decrease_quantity(temp_package){
      if(temp_package.quantity == temp_package.quantity){
        return alert("can't be in minus")
      }
      temp_package.quantity--
      this.Price -= temp_package.price
  }
  countPrice(){
     this.Price = 0;
      for(let p of this.packagesArray){
        this.Price += p.price*p.quantity
      }
  }
  
}
