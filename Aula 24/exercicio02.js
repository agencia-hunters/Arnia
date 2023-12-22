const io = require ('../io/io');

io.write('Bem vindo nadador! Digite sua idade abaixo pra verificar a sua categoria:');
const idade = io.readInt();

function verificacao(idade) {
    if (idade >= 5 && idade <=7) {
        return "Infantil A";
    }
    else if (idade >= 8 && idade <=10) {
        return "Infantil B";
    }
    else if (idade >= 11 && idade <= 13) {
        return "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
        return "Juvenil B";
    } else if (idade >= 18) {
        return "Adulto";
    } else {
        return "Diacho que tu quer nadando?"
    }
}

const categoria = verificacao(idade);
io.write(`Sua categoria é: ${categoria}`)