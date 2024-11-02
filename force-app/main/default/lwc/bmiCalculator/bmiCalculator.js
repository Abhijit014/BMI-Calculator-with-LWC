import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    bmiValue = ''
    result = ''

    inputHandler(event){
        const{name, value} = event.target
        if(name === 'height'){
            this.height = value
        }
        if(name === 'weight'){
            this.weight = value
        }
    }

    submitHandler(event){
        event.preventDefault()
        console.log("height", this.height)
        console.log("weight", this.weight)
        this.BmiCalculate()
    }

    BmiCalculate(){
        //BMI = weight in kg / (height in m * heignt in m)
        let height = Number(this.height)/100;
        let BMI = Number(this.weight)/(height*height);
        
        this.bmiValue = Number(BMI.toFixed(2))

        //logic
        if (this.bmiValue < 18.5) {
            this.result = "Underweight";
        } else if (this.bmiValue >= 18.5 && this.bmiValue < 24.9) {
            this.result = "Healthy";
        } else if (this.bmiValue >= 25 && this.bmiValue < 29.9) {
            this.result = "Overweight";
        } else {
            this.result = "Obese";
        }

        console.log("BMI value is:", this.bmiValue)
        console.log("Result is:", this.result)
    }

    recalculate(){

        this.height = ''
        this.weight = ''
        this.bmiValue = ''
        this.result = ''

    }
}