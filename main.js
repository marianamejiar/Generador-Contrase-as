let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTVWZYZabcdefghijklmnopqrstuvwxyz0123456789';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    // Validar que el número sea mayor que 8
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
}

boton.addEventListener('click', generar);












