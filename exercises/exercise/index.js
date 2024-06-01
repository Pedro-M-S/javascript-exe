import { ex1 as ex1L1, ex2 as ex2L1} from "./src/lab01.js";
import {menu, menuLab01, menuLab02, menuLab03} from './src/ui.js';

let message = 'JavaScript Laboratory Exercises';
console.log(message);


function mainLab01(){
    let op;
    do{
        op = menuLab01();
        switch(op){
            case 1: ex1L1();
                break;
            case 2: ex2L1();
                break;
            case 3: 
                break;
        }
    }while(op !== 0);
}

function mainLab02(){
    let op;
    do{
        op = menuLab02();
        switch(op){
            case 1: 
                break;
            case 2: 
                break;
            case 3: 
                break;
        }
    }while(op !== 0);
}

function mainLab03(){
    let op;
    do{
        op = menuLab03();
        switch(op){
            case 1: 
                break;
            case 2: 
                break;
            case 3: 
                break;
        }
    }while(op !== 0);
}


function main(){
    let op;
    do{
        op = menu();
        switch(op){
            case 1: mainLab01();
                break;
            case 2: mainLab02();
                break;
            case 3: mainLab03();
                break;
        }
    }while(op !== 0);
}

main();