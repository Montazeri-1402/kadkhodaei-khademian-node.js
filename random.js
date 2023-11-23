const taas =(from,to,precision)=>{
    let rand=Math.random();//0,1
    rand=rand*(to-from)/(1-0);
    rand=rand -(0*(to-from)/(1-0)-from);
    return rand;
}
console.log({rand:taas(1,6,1)});
console.log({rand:taas(10,60,3)});
console.log({rand:taas(10,12,3)});