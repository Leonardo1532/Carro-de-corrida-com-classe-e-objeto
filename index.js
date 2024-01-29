// 1 - Crie uma classe Carro com as seguintes propriedades:


// Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
// Potencia - número de cavalos de potência do carro;
// VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
// Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h


// 2 - Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância. Use a seguinte fórmula para o cálculo: 


//  resultado = distância / (VelocidadeMaxima / Aceleracao). 



//    A função deve retornar esse resultado;


// 3 - Crie uma classe Corrida com as seguintes propriedades:


// Nome - nome do local da corrida;
// Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
// Distancia - o total em metros da corrida;
// Participantes - um array de objetos da classe Carro
// Vencedor - qual a equipe que ganhou a corrida;


// 4 - Adicione na classe Corrida um método que verifica qual foi o carro que completou a corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o nome do carro que fez o menor tempo na propriedade “Vencedor”.


// 5 - Adicione na classe Corrida um método que exibe na tela quem é o vencedor da corrida.


// 6 - Crie um objeto da classe Corrida e preencha a propriedade Participantes com alguns objetos da calsse Carro.


// 7 - Chame o método para verificar quem fez o menor tempo e por fim o método que exibe o vencedor.


class Corrida {
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(nome, tipo, distancia) {
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
    }

    // 4 - Adicione na classe Corrida um método que verifica qual foi o carro que completou a corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o nome do carro que fez o menor tempo na propriedade “Vencedor”.

    MenorTempo() {
        let carroComMenorTempo = 100000
        for (let index = 0; index < this.Participantes.length; index++) {
            if (this.Participantes[index].CalcularTempoEmSegundos(this.Distancia) < carroComMenorTempo) {
                carroComMenorTempo = this.Participantes[index].CalcularTempoEmSegundos(this.Distancia)
                this.Vencedor = this.Participantes[index].Nome
            }
        }

    }
    ExibirVencedor() {
        console.log("O vencedor da corrida é : " + this.Vencedor)
    }
}


class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    CalcularTempoEmSegundos(distanciaEmMetros) {
        parseInt(distanciaEmMetros)
        let resultado = distanciaEmMetros / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

let nomePista = prompt("Nome do local da corrida")
let tipo = prompt("Qual o tipo? uma corrida pode ser Fórmula 1, Stock Car, Rally, etc")
let distancia = parseInt(prompt("A distancia em metros da corrida"))
let pista = new Corrida(nomePista, tipo, distancia)



let condition = true
while (condition) {

    let nome = prompt("Qual a equipe do carro Ferrari, Mercedes, McLaren, etc;")
    let potencia = prompt("Número de cavalos de potência do carro")
    let velocidadeMaxima = prompt(" Qual a maior velocidade que o carro pode alcançar")
    let aceleracao = prompt(" O tempo em segundos que o carro leva para ir de 0 a 100 km / h")

    let carroCorrida = new Carro(nome, potencia, velocidadeMaxima, aceleracao)


    pista.Participantes.push(carroCorrida)

    let continuar = prompt("Deseja criar outro carro de corrida, s ou n")
    if (continuar !== "s") {
        condition = false
    }
}