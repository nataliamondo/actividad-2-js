1)/*Obtén del 1 al 255: Escribe una función 
que devuelve un array con todos los números del 1 al 255*/

function x(){
    var arr=[];
    for(var i=1;i<=255;i++){
    arr.push(i);
    }
    return arr;
  }
  console.log(x());

 2) /*Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números 
  pares del 1 al 1000.Puedes usar un operador de módulo para este ejercicio*/

  function y (){
    var x=0; 
  for (var i=1; i<=1000;i++){

    if ( i%2 == 0 ){
      x= x+i;
    }
  }
  return x;
}
console.log(y())
    

 3)//suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números 
 //impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

  function j (max){
    var x=0; 
  for (var i=1; i<=max;i++){

    if ( i%2 != 0 ){
      x= x+i;
    }
  }
  return x;
}
console.log(j(10))

4)//Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un
 //array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).

function sumarray (x){
var c=0;
  for(var i=0;i<x.length;i ++){

    c=c+x[i];
     
  }
 return c;
}
a=[1,2,8];
b=sumarray (a);
console.log(b);

5)//Encuentra el mayor (max): 
//Dado un array con múltiples valores, escribe una función que devuelva el número mayor 
//(ej: para [-3,3,5,7] el número mayor (max) es 7). 

function arraymax (d){
  var mayor=d[0];

    for (let index = 1; index < d.length; index++) {
      const element = d[index];
      if( element>mayor){
          mayor=element
      }          
    }
    return mayor
}
v=[2,4,1000,100000]
ab=arraymax(v)
console.log (ab);

6)//Dado un array con múltiples valores, escribe una función
// que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function avg (x){
    var a=0;
    
      for(var i=0; i<x.length; i++){
        
        a=a+x[i];
      }
    return a/b.length;
  }
  b=[1,2,3,4,6];
  c=avg(b);
  console.log(c);

7) //Array de impares: Escribe una función que devuelva un array de todos
//los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function uno (){
  var array=[];
  
    for(var i=0; i<=50; i++){
      
          if (i%2 !=0 ){
      array.push(i);
      }
    }
  return array;
}
console.log(uno());

8)//Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve
 //los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función 
 //devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

 function c (a,d){
  var sum=0
 for (let index = 0; index < a.length; index++) {
     if (a[index]>d){
        sum++;
     }
 }
   return sum;  
}
array=c([1,10,3,8],2);
console.log(array);

9)//Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor 
//por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function f (d){
  var arraymax=[];
  for(var i=0;i<d.length;i++){
    arraymax.push(d[i]*d[i]);
  }
  console.log (arraymax);
}
f([3,20,5]);

10)//Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier 
//número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera 
//contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function c(b){
  for(i=0; i<b.length;i++){
    if(b[i]<0){
      b[i]=0;
    }
  }
  console.log (b);
}

c([-5,-8,10,9,-6])

11)//Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo 
//array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original 
//(ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function maxminavg (a){
  var max=0;
  var min=0;
  var avg=0;
  var sum=0
  var array=[]

  for(i=0;i<a.length;i++){
    if(max<a[i]){
      max=a[i];
    }

    if(min>a[i]){
      min=a[i];
    }

    sum=sum+a[i];
  }
  avg=sum/a.length;

  return [max,min,avg];
}
c=[1,2,3,-5];
b=maxminavg(c);
console.log (b);

12)//Intercambia Valores: Escribe una función que intercambie el primer y el último valor de
// cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2]
 //será [-2,5,10,1]). 

 function abc (array){
  var uno=array[0];
    array[0]=array[array.length-1];
    array[array.length-1]=uno;
 
  return array;
}
console.log(abc([1,2,3,6,9]));

13)//De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor
// negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá 
//[‘Dojo’,‘Dojo’,2].

function string(arr){
  
  for(var i=0; i<arr.length;i++){
    if(arr[i]<0){
      arr[i]='Dojo';
    }
  }
    return arr;
 
}
console.log(string([-9,-1,1,2,3,-5]));






 

     
 
 


