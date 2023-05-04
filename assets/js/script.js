const h1 = document.querySelector('.container h1'); //selecionando o h1 dentro da section que tem a classe container (como no seletor CSS)

const data = new Date(); //obtem da data atual

h1.innerHTML = dateNow(data); //Definindo o valor da variável h1 (que está no HTML)

function dateNow(data) { //função para obter a data completa (dia semana, dia do mês, mês, ano, horas e minutos)
    const week = data.getDate(); //obtém o dia da semana
    const day = zeroAEsquerda(data.getDay()); //obtém o dia do mês
    const month = data.getMonth(); //obtém o mês
    const year = data.getFullYear(); //obtém o ano
    const hour = zeroAEsquerda(data.getHours()); //obtém as horas
    const minutes = zeroAEsquerda(data.getMinutes()); //obtém os minutos

    const weekDay = getWeekDay(week); //Obtendo o dia da semana (domingo, segunda, ...)
    const monthDay = getMonthName(month); //Obtendo o mês (Janeiro, Fevereiro, ...)

    return `${weekDay}, ${day} de ${monthDay} de ${year} <br>
    ${hour}:${minutes}`;
}

function zeroAEsquerda(number) { //função para adicionar 0 caso o dia do mês for menor que dois dígitos
    return number >= 10 ? number : `0${number}`;
}

function getMonthName(month) {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']; //Criando array com os meses (cada mês com seu indice)
    return months[month]; //retornando o nome do mes de acordo com a variável month (que vai de 0 a 11) e do indice do array months (que vai de 0 a 11) | Exemplo: months[month] = month = 0 -> months = 'Janeiro'
}

function getWeekDay(week) {
    const weeks = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return weeks[week]; //retorna o valor do dia da semana de acordo com a variável week (que vai de 0 a 6) e do indice do array weeks (que vai de 0 a 6) | Exemplo: weeks[week] = week = 3 -> weeks = 'Quarta-Feira'
}