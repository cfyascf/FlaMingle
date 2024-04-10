const phone_input = document.getElementById('userphone-input');
phone_input.addEventListener('keypress', (event) => {
    const pressedKey = event.key;
    if(isNaN(pressedKey)) {
        event.preventDefault();
    }

    let input_len = phone_input.value.length;
    if(input_len == 2) {
        phone_input.value += ' ';
    }

    else if(input_len == 4) {
        phone_input.value += ' ';
    }

    else if(input_len == 9) {
        phone_input.value += '-';
    }
});