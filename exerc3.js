var num1 = 7
var num2 = 3

function soma(num1, num2){
    return num1 + num2

}

if(soma(num1, num2)%2 == 0){
    console.log("A soma dos números", num1, "e", num2, " é PAR!")
}
else{
    console.log("A soma dos números", num1, "e", num2, " é IMPAR!")
}