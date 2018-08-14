import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers = [];
  public show:Boolean;
  constructor() { }

  ngOnInit() {
    this.show = true;
    axios
      .get("/assets/data/customers.json")
      .then(res => {

        this.customers = res.data;
        this.show = false;
      })
      .catch(err => console.log(err));
  }

}

