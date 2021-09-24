var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,]
var num = 0
var contador = 0
var soma = 0

for(let alet = 0; alet < numeros.length; alet+=1){
    if(numeros[alet]%2 == 0){
        contador+=1
        num += numeros[alet] 
    }
}

soma = num/contador 
console.log(soma,"é média da soma dos números pares.")