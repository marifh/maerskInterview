import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from '../../models/List';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  list!:List[];

  nameSearch:any = '';

  constructor() { 
  }

  ngOnInit(){
    this.list =[
      {
        productType: 'Vegitables',
        productName: 'Onion',
        proCode: 'pl7880',
        proPrice: 48.23
      },

      {
        productType: 'Food',
        productName: 'Paneer Chilli',
        proCode: 'pL7980',
        proPrice: 120
      },

      {
        productType: 'Healthcar',
        productName: 'Sanitizer',
        proCode: 'pL6880',
        proPrice: 88
      },

      {
        productType: 'FMCG',
        productName: 'Surf',
        proCode: 'pL3880',
        proPrice: 65
      },

      {
        productType: 'Other',
        productName: 'Screw',
        proCode: 'pL7080',
        proPrice: 15
      },

      {
        productType: 'Vegitables',
        productName: 'Carrot',
        proCode: 'pL7890',
        proPrice: 18
      },

      {
        productType: 'Vegitables',
        productName: 'Capsicum',
        proCode: 'pL7820',
        proPrice: 43
      },

      {
        productType: 'Food',
        productName: 'Chiken',
        proCode: 'pL7770',
        proPrice: 220
      },

      {
        productType: 'Healthcar',
        productName: 'Mask',
        proCode: 'pL4880',
        proPrice: 288
      },

      {
        productType: 'FMCG',
        productName: 'Oil',
        proCode: 'pL3900',
        proPrice: 165
      },

      {
        productType: 'Other',
        productName: 'Hammer',
        proCode: 'pL1180',
        proPrice: 125
      },

    ]
  }

 // cartProductList:any = [];

  productshow:boolean = false;

  test:any = [];
 // @Output() productAdded = new EventEmitter();
  addProductToCart(lst:any) {
    this.productshow = true;
   // this.productAdded.emit(lst);
   // console.log(lst);
   this.test.push({...lst, num:1});
    //this.test = lst;
    console.log();
  }
  

}
