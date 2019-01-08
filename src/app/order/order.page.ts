import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  id: string;
  customerId: string;
  customerName: string;
  address: string;
  constructor(
  ) { }

  ngOnInit() {
  }

}
