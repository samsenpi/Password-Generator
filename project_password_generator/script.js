

const res=document.getElementById("result");
const clipboard=document.getElementById("clipboard");
const length=document.getElementById("length");
const uppercase=document.getElementById("uppercase");
const lowercase=document.getElementById("lowercase");
const numbers=document.getElementById("numbers");
const symbols=document.getElementById("symbols");
const generate=document.getElementById("generate");
const clear=document.getElementById("clear");
let pwd="";
let arr=[];
const randomFun ={
    upper: generateUpper,
    lower:generateLower,
    number: generateNumber,
    symbol:generateSymbol
}
clear.addEventListener("click",function(){

res.innerText="";

})

generate.addEventListener("click",function(){

    password();
})
clipboard.addEventListener("click",function(){

    let pass=res.innerText;
    if(!pass)return;

    let element=document.createElement("input");
        element.value=pass;
        document.body.appendChild(element);
        element.select();
        document.execCommand("copy");
        element.remove();
        alert("copy");


})
function password(){

  let l=+length.value;  
  let upper=uppercase.checked;
  let lower=lowercase.checked;
  let number=numbers.checked;
  let symbol=symbols.checked;
    
  let total=upper+lower+number+symbol;
  if(total===0)
  {
    pwd="";
  }
    if(upper)arr.push({upper});
    if(lower)arr.push({lower});
    if(number)arr.push({number});
    if(symbol)arr.push({symbol});

//here we store in arr[0] an obj with name arr[0] and key upper
// when we do Object.key(obj_name); it will return AN ARRAY OF key for that obj which is in this case arr[0]


  for(i=0;i<l;i++){

    for(j=0;j<arr.length;j++){

        let funName=Object.keys(arr[j])[0];
        console.log(funName);
        pwd+= randomFun[funName]();
    }

  }

res.innerText=pwd.slice(0,l);


}
function generateUpper(){

return String.fromCharCode(Math.floor(Math.random()*26)+65);

}
function generateLower(){

    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function generateNumber(){

    return String.fromCharCode(Math.floor(Math.random()*26)+48);
    
}
function generateSymbol(){

        return String.fromCharCode(Math.floor(Math.random()*26)+33);
}