const dropList = document.querySelectorAll(".drop-list select");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
getButton = document.querySelector("form button");
const apiKey = "8cfbccffbbcfbd42b893837e";

for (let index = 0; index < dropList.length; index++) {
    for(currency_code in countryCode) {
        let selected;

        if (index == 0) {
            selected = currency_code == "USD" ? "selected" : "";
        } else if (index == 1) {
            selected = currency_code == "BRL" ? "selected" : "";
        }

        let optionTag = `<option value="${currency_code}">${currency_code}</option>`;
        dropList[index].insertAdjacentHTML("beforeend", optionTag);
    }

    dropList[index].addEventListener("change", e => {
        loadFlag(e.target);
    });
};

function loadFlag(element) {
    for (code in countryCode) {
        if (code == element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagsapi.com/${countryCode[code]}/flat/64.png`;
        }
    }
}

window.addEventListener("onload", () => {
    getExchangeRate();
});

getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});

const exchangeIcon = document.querySelector(".drop-list .icon");
exchangeIcon.addEventListener("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
})

function getExchangeRate() {
    const amount = document.querySelector(".amount input");
    exchangeRateTxt = document.querySelector(".exchange-rate");
    let amountVal = amount.value;
    
    if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }

    exchangeRateTxt.innerText = "Convertendo...";

    let url = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value]
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    }).catch(() => {
        exchangeRateTxt.innerText = "Algo deu errado..."
    });
};