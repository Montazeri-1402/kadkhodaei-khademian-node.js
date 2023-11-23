const calculate =(opperand1,operand2,operator)=>{
    let result = null;
    switch(operator)
    {
    case'/':
    result=opperand1/operand2;
    break;
    case'*':
    result=opperand1*operand2;
    break;
    case'-':
    result=opperand1-operand2;
    break;
    case'+':
    result=opperand1+operand2;
    break;
    }
    
    return{
        opperand1,operand2,operator,
        result,
    }
}
console.log(calculate(2,3,'+'));
console.log(calculate(2,10,'/'));
console.log(calculate(11,3,'*'));
console.log(calculate(11,3,'x'));