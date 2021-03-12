import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  addClicked = false;
  subtractClicked = false;
  multiplyClicked = false;
  divisionClicked = false;
  signSwitched = false;
  decimalClicked = false;

  isZero = true;
  num1Full = false;
  num2Full = false;
  calculation: string = "0";
  num1: number = 0;
  num2: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.num1 = 0;
    this.num2 = 0;
    this.calculation = "0";
    this.isZero = true;
    this.addClicked = false;
    this.subtractClicked = false;
    this.multiplyClicked = false;
    this.divisionClicked = false;
    this.signSwitched = false;
    this.decimalClicked = false;
    this.num1Full = false;
    this.num2Full = false;

  }

  clickNumber(num: number) {

    if(num == 0 && this.calculation == "0") {
      return;
    }

    if(num != 0 && this.isZero) {
      this.calculation = "";
      this.isZero = false;
    }

    if(this.calculation.length != 42) {
      let stringNum = num.toString();
      this.calculation += stringNum;
    }
    
  }

  add() {

    
      
    // THIS IS EXECUTED IF THE NUMBER IS A FLOAT
    if(this.calculation.includes(".")) {
      this.num1 = parseFloat(this.calculation);
      this.isZero = true;
      this.num1Full = true;
      this.addClicked = true;
      console.log("Num1: " + this.num1);
      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
      return;
    }

    // ALLOWS MORE MULTIPLE ADDS IN A ROW
    if(this.addClicked) {
      this.num2 = parseInt(this.calculation);
      this.calculation = (this.num1 + this.num2).toString();
      this.num1 = 0;
      this.num1Full = false;
      this.addClicked = false;
      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
    }
    // ALLOWS MORE MULTIPLE ADDS IN A ROW
    
    this.num1 = parseInt(this.calculation);
    // this.calculation = "0"; RESETS CALCULATION TO ZERO AFTER EACH CLICK OF AN OPERATION
    this.isZero = true;
    this.num1Full = true;
    this.addClicked = true;
    console.log("Num1: " + this.num1);
    if(this.decimalClicked) {
      this.decimalClicked = false;
    }
    

  }

  subtract() {

    // THIS IS EXECUTED IF THE NUMBER IS A FLOAT
    if(this.calculation.includes(".")) {
      this.num1 = parseFloat(this.calculation);
      this.isZero = true;
      this.num1Full = true;
      this.subtractClicked = true;
      console.log("Num1: " + this.num1);
      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
      return;
    }

    // ALLOWS MORE MULTIPLE SUBS IN A ROW
    if(this.subtractClicked) {
      this.num2 = parseInt(this.calculation);
      this.calculation = (this.num1 - this.num2).toString();
      this.num1 = 0;
      this.num1Full = false;
      this.subtractClicked = false;
      if(this.decimalClicked) {
       this.decimalClicked = false;
      }
    }
    // ALLOWS MORE MULTIPLE SUBS IN A ROW

    if(!this.num1Full) {
      this.num1 = parseInt(this.calculation);
      // this.calculation = "0"; RESETS CALCULATION TO ZERO AFTER EACH CLICK OF AN OPERATION
      this.isZero = true;
      this.num1Full = true;
      this.subtractClicked = true;
      console.log("Num1: " + this.num1);

      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
    }

  }

  multiply() {

    // THIS IS EXECUTED IF THE NUMBER IS A FLOAT
    if(this.calculation.includes(".")) {
      this.num1 = parseFloat(this.calculation);
      this.isZero = true;
      this.num1Full = true;
      this.multiplyClicked = true;
      console.log("Num1: " + this.num1);
      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
      return;
    }

    // ALLOWS MORE MULTIPLE MULTS IN A ROW
    if(this.multiplyClicked) {
      this.num2 = parseInt(this.calculation);
      this.calculation = (this.num1 * this.num2).toString();
      this.num1 = 0;
      this.num1Full = false;
      this.subtractClicked = false;
      if(this.decimalClicked) {
       this.decimalClicked = false;
      }
    }
    // ALLOWS MORE MULTIPLE MULTS IN A ROW

    if(!this.num1Full) {
      
      this.num1 = parseInt(this.calculation);
      // this.calculation = "0"; RESETS CALCULATION TO ZERO AFTER EACH CLICK OF AN OPERATION
      this.isZero = true;
      this.num1Full = true;
      this.multiplyClicked = true;
      console.log("Num1: " + this.num1);

      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
    }

  }

  divide() {

    // THIS IS EXECUTED IF THE NUMBER IS A FLOAT
    if(this.calculation.includes(".")) {
      this.num1 = parseFloat(this.calculation);
      this.isZero = true;
      this.num1Full = true;
      this.divisionClicked = true;
      console.log("Num1: " + this.num1);
      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
      return;
    }

    // ALLOWS MORE MULTIPLE DIV IN A ROW
    if(this.divisionClicked) {
      this.num2 = parseInt(this.calculation);
      this.calculation = (this.num1 / this.num2).toString();
      this.num1 = 0;
      this.num1Full = false;
      this.divisionClicked = false;
      if(this.decimalClicked) {
       this.decimalClicked = false;
      }
    }
    // ALLOWS MORE MULTIPLE DIV IN A ROW

    if(!this.num1Full) {

      this.num1 = parseInt(this.calculation);
      // this.calculation = "0"; RESETS CALCULATION TO ZERO AFTER EACH CLICK OF AN OPERATION
      this.isZero = true;
      this.num1Full = true;
      this.divisionClicked = true;
      console.log("Num1: " + this.num1);

      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
    }

  }

  equals() {

    if(this.addClicked) {

      // THIS IS EXECUTED IF THE NUMBER IS A FLOAT
      if(this.calculation.includes(".")) {
        this.num2 = parseFloat(this.calculation);
        this.calculation = (this.num1 + this.num2).toString();
        this.num1 = 0;
        this.num1Full = false;
        this.addClicked = false;
        console.log("Num1: " + this.num1);
        if(this.decimalClicked) {
          this.decimalClicked = false;
        }
        return;
      }

      this.num2 = parseInt(this.calculation);
      this.calculation = (this.num1 + this.num2).toString();
      this.num1 = 0;
      this.num1Full = false;
      this.addClicked = false;
      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
      console.log("Num2: " + this.num2);
    }

    if(this.subtractClicked) {

      // THIS IS EXECUTED IF THE NUMBER IS A FLOAT
      if(this.calculation.includes(".")) {
        this.num2 = parseFloat(this.calculation);
        this.calculation = (this.num1 + this.num2).toString();
        this.num2 = 0;
        this.num1Full = false;
        this.subtractClicked = false;
        console.log("Num1: " + this.num1);
        if(this.decimalClicked) {
          this.decimalClicked = false;
        }
        return;
      }

      this.num2 = parseInt(this.calculation);
      this.calculation = (this.num1 - this.num2).toString();
      this.num1 = 0;
      this.num1Full = false;
      this.subtractClicked = false;
      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
      console.log("Num2: " + this.num2);
    }

    if(this.multiplyClicked) {

      // THIS IS EXECUTED IF THE NUMBER IS A FLOAT
      if(this.calculation.includes(".")) {
        this.num2 = parseFloat(this.calculation);
        this.calculation = (this.num1 + this.num2).toString();
        this.num1 = 0;
        this.num1Full = false;
        this.multiplyClicked = false;
        console.log("Num1: " + this.num1);
        if(this.decimalClicked) {
          this.decimalClicked = false;
        }
        return;
      }

      this.num2 = parseInt(this.calculation);
      this.calculation = (this.num1 * this.num2).toString();
      this.num1 = 0;
      this.num1Full = false;
      this.multiplyClicked = false;
      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
      console.log("Num2: " + this.num2);
    }

    if(this.divisionClicked) {

      if(parseInt(this.calculation) == 0) {
        this.calculation = "ERR: Division by 0";
        this.num1 = 0;
        this.num1Full = false;
        this.divisionClicked = false;
        if(this.decimalClicked) {
          this.decimalClicked = false;
        }
        return;
      }

      // THIS IS EXECUTED IF THE NUMBER IS A FLOAT
      if(this.calculation.includes(".")) {
        this.num2 = parseFloat(this.calculation);
        this.calculation = (this.num1 + this.num2).toString();
        this.num2 = 0;
        this.num1Full = false;
        this.divisionClicked = false;
        console.log("Num1: " + this.num1);
        if(this.decimalClicked) {
          this.decimalClicked = false;
        }
        return;
      }

      this.num2 = parseInt(this.calculation);
      this.calculation = (this.num1 / this.num2).toString();
      this.num1 = 0;
      this.num1Full = false;
      this.divisionClicked = false;
      if(this.decimalClicked) {
        this.decimalClicked = false;
      }
      console.log("Num2: " + this.num2);
    }

  }

  switchSign() {
    
    if(this.calculation == "0") {
      return;
    }

    if(this.calculation.charAt(0) == "-") {
      this.calculation = this.calculation.substring(1, this.calculation.length);
    } else {
      this.calculation = "-" + this.calculation;
    }

  }

  decimalPoint() {

    if(!this.decimalClicked && this.calculation.includes(".")) {
      return;
    }

    if(!this.decimalClicked) {
      this.calculation = this.calculation + ".";
      this.decimalClicked = true;
      return;
    }

    if(this.calculation.charAt(this.calculation.length - 1) == ".") {
      this.calculation = this.calculation.substring(0, this.calculation.length - 1);
      this.decimalClicked = false;
    } else {
      return;
    }

  }

  

}

