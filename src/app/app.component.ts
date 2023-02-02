import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-27-calculadora';

  suma = 0;
  resta = 0;
  multiplicacion = 0;
  division = 0;
  none:String = "Elija una operación"

  num1:number = 0;
  num2:number = 0;
  
  option:String ="";
  operacion:String = "5";

  show = false;

  Calcular(){

    this.num1 = parseInt((<HTMLInputElement>document.getElementById("num1")).value);

    this.num2 = parseInt((<HTMLInputElement>document.getElementById("num2")).value);


    this.option = (<HTMLSelectElement>document.getElementById('opciones')).value;
      
    this.operacion = this.option;
  

    if (this.option == "1") {
      let suma = this.num1 + this.num2;
      this.suma = suma;

     
    } else if (this.option == "2") {
      let resta = this.num1 - this.num2;
      this.resta = resta;


    } else if (this.option == "3") {
      let multiplicacion = this.num1*this.num2;
      this.multiplicacion = multiplicacion;


    } else if (this.option == "4") {
      let division = this.num1/this.num2;
      this.division = division;

    } else if (this.option == "5") {
      this.show = true;
    }
   
  }




}
