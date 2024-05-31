import promptSync from "prompt-sync";

const isNumeric = (val) => {
    return !isNaN(Number(val));
 }
 
 const readInt = (text) =>{
    const prompter = promptSync();
    let input = "";
    let check = true;
    do{
        input = prompter(text + ": ");
        check = isNumeric(input);
    }while(check == false);
    let num = parseInt(input);
    return num;
}


 const readFloat = (text) =>{
    const prompter = promptSync();
    let input = "";
    let check = true;
    do{
        input = prompter(text + ": ");
        check = isNumeric(input);
    }while(check == false);
    let num = parseFloat(input);
    return num;
}

 
 const readString = (text) =>{
    const prompter = promptSync();
    let input = "";
    do{
        input = prompter(text + ": ");
    }while(input.length == 0);
    
    return input;
}

export {readInt, readFloat, readString};