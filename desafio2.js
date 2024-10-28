let vitorias = 50;
let derrotas = 20;
let resultado;

let nivel = function calc(vitorias, derrotas, resultado){
    resultado = vitorias - derrotas;

    if (resultado < 10){
        return "ferro"
    }else if (resultado < 20){
        return "bronze"
    }else if (resultado < 50){
        return "prata"
    }else if (resultado < 80){
        return "ouro"
    }else if (resultado < 90){
        return "diamante"
    }else if (resultado < 100){
        return "lendario"
    }else if (resultado > 101){
        return "imortal"
    }

}

console.log(`O herói tem saldo de ${resultado} e esá no nível ${nivel}`);