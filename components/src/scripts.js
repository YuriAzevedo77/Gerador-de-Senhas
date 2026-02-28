function getChartTypes() {
    const uppercase = document.getElementById('include-uppercase').checked;
    const lowercase = document.getElementById('include-lowercase').checked;
    const number = document.getElementById('include-number').checked;
    const specialChar = document.getElementById('include-special-char').checked;

    const charTypes = [];

    if (uppercase) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (lowercase) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (number) {
        charTypes.push('0123456789');
    }

    if (specialChar) {
        charTypes.push('!@#$%&*()+=?[],.;<>');
    }
    return charTypes;
}

function getPasswordSize() {
    const size = document.getElementById('size').value;
    if (isNaN(size) || size < 4 || size > 20) {
        alert('Tamanho inválido, digite um número entre 4 e 20');
    }

    return size;
}

function randomCharTypes(charTypes) {
    const randomIndex = Math.floor(Math.random() * charTypes.length);

    return charTypes[randomIndex][Math.floor(Math.random() * [charTypes[randomIndex].length])];
}

function generetePassword(size, charTypes) {
    let passwordGenereted = '';

    while (passwordGenereted.length < size) {
        passwordGenereted += randomCharTypes(charTypes);
    }
    return passwordGenereted;
}

document.getElementById('generate').addEventListener('click', function exibition() {
    const size = getPasswordSize();
    const charTypes = getChartTypes();

    if (!charTypes.length) {
        alert('Selecione apenas um tipo de caractere!');
        return;
    }

    const passwordGenereted = generetePassword(size, charTypes);

    document.getElementById('password-container').classList.add('show');
    document.getElementById('password').textContent = passwordGenereted;

})
document.getElementById('copy').addEventListener('click', function () {
    navigator.clipboard.writeText(document.getElementById('password').textContent);
    alert('senha copiada com sucesso');
});