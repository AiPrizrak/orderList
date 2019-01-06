import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OrderItem } from '../order/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  orders: OrderItem[];
  constructor(
  ) { }

  ngOnInit() {
  }
}
