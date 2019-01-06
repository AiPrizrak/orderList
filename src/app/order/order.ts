import {ProductItem} from '../product/product';
export class OrderItem {
    id: string;
    customerId: string;
    customerName: string;
    address: string;
    products: ProductItem[];
}