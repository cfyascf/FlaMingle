const usercpf_input = document.getElementById('cpf-input');
usercpf_input.addEventListener('keypress', (event) => {
    const pressedKey = event.key;
    if(isNaN(pressedKey)) {
        event.preventDefault();
    }

    let input_len = usercpf_input.value.length;

    if(input_len == 3) {
        usercpf_input.value += '.';
    }

    else if(input_len == 7) {
        usercpf_input.value += '.';
    }

    else if(input_len == 11) {
        usercpf_input.value += '-';
    }
});

const birth_input = document.getElementById('userbirth-input');
birth_input.addEventListener('keypress', (event) => {
    const pressedKey = event.key;
    if(isNaN(pressedKey)) {
        event.preventDefault();
    }

    let input_len = birth_input.value.length;

    if(input_len == 2) {
        birth_input.value += '/';
    }
    else if(input_len == 5) {
        birth_input.value += '/';
    }
});

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