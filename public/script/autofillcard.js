const cardnumber_input = document.getElementById('cardnumber-input');
console.log(cardnumber_input);
cardnumber_input.addEventListener('keypress', (event) => {
    const pressedKey = event.key;
    if(isNaN(pressedKey)) {
        event.preventDefault();
    }

    let input_len = cardnumber_input.value.length;
    if(input_len == 4) {
        cardnumber_input.value += ' ';
    }

    else if(input_len == 9) {
        cardnumber_input.value += ' ';
    }

    if(input_len == 14) {
        cardnumber_input.value += ' ';
    }
});

const expdate_input = document.getElementById('expdate-input');
expdate_input.addEventListener('keypress', (event) => {
    const pressedKey = event.key;
    if(isNaN(pressedKey)) {
        event.preventDefault();
    }

    let input_len = expdate_input.value.length;
    if(input_len == 2) {
        expdate_input.value += '/';
    }
});

const cvv_input = document.getElementById('cvv-input');
cvv_input.addEventListener('keypress', (event) => {
    const pressedKey = event.key;
    if(isNaN(pressedKey)) {
        event.preventDefault();
    }
});

const bank_input = document.getElementById('bank-input');
bank_input.addEventListener('keypress', (event) => {
    const pressedKey = event.key;
    if(isNaN(pressedKey)) {
        event.preventDefault();
    }
});