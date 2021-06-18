function calculator(){
    let myObj={
        selector1: null,
        selector2: null,
        resultSelector: null,
        init: function (...args){
            myObj.selector1=document.querySelector(args[0]);
            myObj.selector2=document.querySelector(args[1]);
            myObj.resultSelector=document.querySelector(args[2]);
        },
        add: function(){
            myObj.resultSelector.value=Number(myObj.selector1.value)+Number(myObj.selector2.value);
        },
        subtract: function(){
            myObj.resultSelector.value=Number(myObj.selector1.value)-Number(myObj.selector2.value);
        }
    };
    
    
       
    
    return myObj;
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 