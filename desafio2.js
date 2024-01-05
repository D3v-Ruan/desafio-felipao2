let partidas= calcular (111,10)
let SaldoVitorias = partidas

function calcular (Vit,Der)
{   let subtracao = Vit - Der
    return subtracao
}

if(partidas<10)
    {partidas= "Ferro"}
else if(partidas >=11 && partidas<=20)
    {partidas= "Bronze"}
else if(partidas >=21 && partidas <= 50)
    {partidas= "Prata"}
else if(partidas >=51 && partidas <=80)
    {partidas= "Ouro"}
else if(partidas >=81 && partidas <=90)
    {partidas= "Diamante"}
else if(partidas >=91 && partidas <=100)
    {partidas= "Lendário"}
else if(partidas >101)
    {partidas= "imortal"}

console.log
    ("o herói tem o saldo de "+ SaldoVitorias +
     " vitorias e está no nivel de " +partidas)