const convertValues = async () => {
    let coins = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(function (result) {
        return result.json()
    })
}

const dolar = moedas.USDBRL.high
    const euro = moedas.EURBRL.high
    const bitcoin = moedas.BTCBRL.high