import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public itemname: any;
  public itemprice: any;
  public shoppingList: string[] = [];
  add(){
  if (this.itemname.trim() !== '' && this.itemprice.trim() !== '') {
  this.shoppingList.push(this.itemname+' '+'₹'+this.itemprice);
  this.itemname = '';
  this.itemprice='';
  }
  }
  remove(index: number){
  this.shoppingList.splice(index, 1);
  }
  }