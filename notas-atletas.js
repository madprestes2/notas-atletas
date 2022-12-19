/*let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
*/
// const atleta = new Atleta("Cesar Abascal",30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

class Atleta{
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas 
  }
  
  calculaCategoria(){
    if(this.idade >=9 && this.idade <= 11){ return "Infantil"}
    if(this.idade >= 12 && this.idade <= 13){ return "Juvenil"}
    if(this.idade >= 14 && this.idade <= 15){ return "Intermediário"}
    if(this.idade >= 16 && this.idade <= 30){ return "Adulto"}
    else {return "Sem Categoria" }
    /*Infantil: 9 a 11 anos
    Juvenil: 12 e 13 anos
    Intermediário: 14 e 15 anos
    Adulto: 16 a 30 anos
    Sem categoria: demais idades*/
  }

  calculaIMC(){
    let peso = this.peso
    let altura = this.altura
    let imc = peso / altura ** 2

    return imc
    //Fórmula: imc = peso / (altura x altura)
  }

  calculaMediaValida(){
    let notasAtleta = this.notas.slice(1, 4) //verificar nota 1 no final 
    let soma = notasAtleta.reduce(function(total,atual){
        return (total + atual)
    })
    let media = soma/notasAtleta.length
    return media 
  }

  obtemNomeAtleta(){
    return this.nome
  }

  obtemIdadeAtleta(){
    return this.idade
  }

  obtemPesoAtleta(){
    return this.peso
  }

  obtemNotasAtleta(){
    let notas = this.notas
    return notas
  }

  obtemCategoria(){
    return this.calculaCategoria()
  }

  obtemIMC(){
    return this.calculaIMC()
  }

  obtemMediaValida(){
    return this.calculaMediaValida()
  }



}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());


/*


let nomesDosCompetidores = 0
let mediaValida = 0
let notasObtidas = 0
for (let i = 0; i < atletas.length; i++){

    nomesDosCompetidores = atletas.map(function(nomes){
        return nomes.nome
    })
    notasObtidas = atletas.map(function(notas){
        let total = notas.notas
        total.sort(function(a, b) {
            return a - b;
        });
        return total
    })

}


for (let i = 0; i < atletas.length; i++){
    switch(i){
        case i:
            console.log(`Atleta: ${nomesDosCompetidores[i]}`)
            console.log(`Notas Obtidas: ${notasObtidas[i]}`)
            let notasAtleta = notasObtidas[i].slice(1, 4) //verificar nota 1 no final 
            let soma = notasAtleta.reduce(function(total,atual){
                return (total + atual)
            })
            let media = soma/notasAtleta.length
            console.log(`Média Válida ${media}`)
            console.log()
            break
        default:
            console.log("Atleta não cadastrado");
        }
}

/*
nota1 : quando slice utilizado com (1,3) a saída é :{
Atleta: Cesar Abascal
Notas Obtidas: 10,9.34,8.42,10,7.88
Média Válida 8.879999999999999

Atleta: Fernando Puntel
Notas Obtidas: 8,10,10,7,9.33
Média Válida 10

Atleta: Daiane Jelinsky
Notas Obtidas: 7,10,9.5,9.5,8
Média Válida 9.75

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida 10
}

====  quando slice utilizado com (1,4) a saída é :{}
Atleta: Cesar Abascal
Notas Obtidas: 10,9.34,8.42,10,7.88
Média Válida 9.253333333333332

Atleta: Fernando Puntel
Notas Obtidas: 8,10,10,7,9.33
Média Válida 9

Atleta: Daiane Jelinsky
Notas Obtidas: 7,10,9.5,9.5,8
Média Válida 9.666666666666666

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida 9.666666666666666
}
o que difere do solicitado no enunciado

*/