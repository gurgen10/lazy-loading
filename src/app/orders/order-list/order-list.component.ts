import { Component, OnInit } from '@angular/core';
import  axios  from 'axios';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders = [];
  public show:Boolean;
  constructor() { }

  ngOnInit() {
    this.show = true;
    axios
      .get("/assets/data/orders.json")
      .then(res => {

        this.orders = res.data;
        this.show = false;
      })
      .catch(err => console.log(err));
  }
  
}
