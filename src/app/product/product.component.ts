import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  dataSource: Product[] = [];
  displayedColumns: string[] = [
    'name',
    'value',
    'validaty'
  ]


}
