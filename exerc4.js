var idade = 17

if(idade >= 18){
    console.log("Você é maior de idade!")
}
else if(idade > 12 && idade < 18){
    console.log("idade =",idade,". Você é adolescente!")
}
else if(idade <= 12){
    console.log("idade =",idade,". Você é uma criança!")
}
else{
    console.log("idade =",idade,". Idade não válida!")
}