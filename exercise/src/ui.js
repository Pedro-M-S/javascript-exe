import { readInt } from "./utils.js";

export function menu(){
    let op = 0;
    do{
        console.log('Menu');
        console.log('1 - lab01');
        console.log('2 - lab02');
        console.log('3 - lab03');
        console.log('\n0 - Exit');
        op = readInt("Enter an option");
    }while(op < 0 || op > 3);

return op;
}

export function menuLab01(){
    let op = 0;
    do{
        console.log('\nMenu Lab01');
        console.log('1 - ex1');
        console.log('2 - ex2');
        console.log('3 - ex3');
        console.log('\n0 - Exit');
        op = readInt("Enter an option");
    }while(op < 0 || op > 3);

return op;
}

export function menuLab02(){
    let op = 0;
    do{
        console.log('\nMenu Lab02');
        console.log('1 - ex1');
        console.log('2 - ex2');
        console.log('3 - ex3');
        console.log('\n0 - Exit');
        op = readInt("Enter an option");
    }while(op < 0 || op > 3);

return op;
}

export function menuLab03(){
    let op = 0;
    do{
        console.log('\nMenu Lab03');
        console.log('1 - ex1');
        console.log('2 - ex2');
        console.log('3 - ex3');
        console.log('\n0 - Exit');
        op = readInt("Enter an option");
    }while(op < 0 || op > 3);

return op;
}