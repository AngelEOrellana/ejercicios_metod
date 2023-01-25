
//Dado un vector de numero buscar si existen repetidos, almacenar el resultado en una variable boolean.
//`nums=[1,2,2,3,4]`
//`duplicado=true`
//`nums=[1,2,3,4]`
//`duplicado=false`


let nums=[0,0,2,8,5,7,9,1];
let duplicado=false;
let j=0;

let cadena = "";

for(let i=0;i < nums.length;i++){  
    j= i + 1;     
    for(j;j < nums.length;j++){
        cadena=cadena + nums[i] +" , " +nums[j];
        if(nums[i] == nums[j]){            
            duplicado=true;
        }else{            
            duplicado=false;
        }
    }     
 }

 console.log("respuesta: " + cadena + " dato:" + duplicado);