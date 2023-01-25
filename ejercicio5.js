

let contador=0;
let nums=[3, 5, 6, 7, 3, 5, 6, 7];
let cadena="";

for(let i=0;i < nums.length;i++){
    if(nums[i] % 2 != 0){
        contador= contador+1;
    }
   cadena = cadena + nums[i];
     
 }

 console.log("De la cadena: " + cadena+ ", tenemos: " + contador + " números impares.");