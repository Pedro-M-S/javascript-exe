import { readInt } from "./utils.js";

const sum2 = (a, b) => {
    return a + b;
}

const sum3 = (a, b, c) => {
    let x = sum2(a, b);
    return sum2(c, x);

}

export const ex1 = () => {
    let num1 = readInt("Enter the first number");
    let num2 = readInt("Enter the second number");
    let res = sum2(num1, num2);
    console.log(num1 +" + " + num2+ " = "+ res);
}
export const ex2 = () => {
    let num1 = readInt("Enter the first number");
    let num2 = readInt("Enter the second number");
    let num3 = readInt("Enter the third number");
    let res = sum3(num1, num2, num3);
    console.log(num1 +" + " + num2+" + " + num3+ " = "+ res);
}

