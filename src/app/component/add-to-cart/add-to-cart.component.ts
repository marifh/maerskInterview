import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  lst!: any[];
  constructor() { }
  @Input() test:any = [];
  @Input() productshow:boolean = false;
  // @Input() selectProd:string = '';
  // @Input() products:any = []

  calcTotal() {
    return this.test.reduce((acc:any, prod:any) => acc+= prod.num ,0)
  }

  ngOnInit(): void {
  }

  

  
}
