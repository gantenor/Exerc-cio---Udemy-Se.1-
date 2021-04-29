var nota1, nota2, total


nota1 = prompt("Digite a primeira nota: ")
nota1 = parseInt(nota1);

alert('');

nota2 = prompt("Digite a segunda nota");
nota2 = parseInt(nota2);

total = nota1 + nota2
alert('Total = ' + total);

if (total >= 60) {
  alert('APROVADO');
}
  else{
     alert('REPROVADO');  
  }



