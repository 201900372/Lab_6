import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  result = ' not a prime number';
  prime = 0;
  count = 0;
  i = 1;
  title = 'Calculator';
  isPrime() {
    for(let i=1;i<=this.prime;i++){
      if(this.prime%i == 0){
        this.count++;
      }
    }

    if (this.count == 2){
      this.result=" is a prime number";
    }
    else{
      this.result=" is not a prime number";
    }
  }
}
