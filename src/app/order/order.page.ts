import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { OrderItem } from './order';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  order: OrderItem;

  constructor(
  ) { }

  ngOnInit() {
  }

}
