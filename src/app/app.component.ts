import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  total:number=0;
  qty:number=0;
  foodmenu=[
    {id:1,name:"Chocolate Cake",price:30,description:"Rich, moist layers of dark chocolate with smooth ganache",img:"assets/images/choco.jpeg"},
    {id:2,name:"Strawberry Cake",price:30,description:"Light sponge with fresh strawberries and creamy frosting",img:"assets/images/stra.jpeg"},
    {id:3,name:"Cookie Cake",price:20,description:"Soft, chewy cookie in cake form with chocolate chips",img:"assets/images/coo.jpeg"},
    {id:4,name:"Carrot Cake",price:20,description:"Moist and spiced with a creamy frosting",img:"assets/images/carrot.jpeg"}
  ]
  title = 'menu';
  sum(event:any, price:number){

    const isChecked:boolean = event.target.checked;
    console.log(isChecked)
    if(isChecked){
      this.total += price;//this => use it with class variable 
      this.qty +=1;
    }else{
      this.total -=price;
      this.qty -=1;
    }
   

  }
}
