
document.addEventListener('click', e => {
    // Apartado a)
    if (e.target.matches('#Acceder')) {
        const profesor = document.getElementById('profesor').value;
        const password = document.getElementById('password').value;
        const regex = /^[a-z0-9 ]*$/;

        if (!regex.test(profesor) || !regex.test(password)) {
            alert('El profesor y la contraseña solo pueden contener letras minúsculas sin acento, números y espacios en blanco.');
            return false;
        }

        if (profesor === '' || password === '') {
            alert('El profesor y la contraseña son obligatorios.');
            return false;
        }
        // Apartado b)
        if (profesor === password) {
            console.log('Profesor:' + profesor);
            console.log(`Contraseña:${password}`);
            const identificaion = document.getElementById('Identificación')
            identificaion.classList.remove('visible')
            identificaion.classList.add('oculto')
            const formulario = document.getElementById('Formulario')
            formulario.classList.remove('oculto')
            formulario.classList.add('visible')
        }
    }

    if (e.target.matches('#Enviar')) {
        const enviar = document.getElementById('Enviar');
        const limpiar = document.getElementById('Limpiar');
        enviar.disabled = true;
        limpiar.disabled = true;
    }


})

const muestraDeporte = e => {
    const $deporte = document.querySelectorAll(
        "input[type = 'checkbox']:checked"
    );
    $checkbox.forEach(value => {
        if (e.target.matches(`#${value.id}`)) {
            console.log('Falla en: ' + value.value);
        }
    });
};


document.getElementById('tipoDeporte').addEventListener('change', function () {
    const deporteSeleccionado = this.value;
    const opcionesMaterial = document.getElementById('opcionesMaterial');
    const unidades = document.getElementById('unidades');

    if (deporteSeleccionado === 'Fútbol' || deporteSeleccionado === 'Baloncesto') {
        opcionesMaterial.classList.remove('oculto');
        opcionesMaterial.classList.add('visible');
        unidades.classList.remove('oculto');
        unidades.classList.add('visible');
    } else {
        opcionesMaterial.classList.remove('visible');
        opcionesMaterial.classList.add('oculto');
        unidades.classList.remove('visible');
        unidades.classList.add('oculto');
    }
});

const checkboxesGimnasia = document.querySelectorAll('input[type=checkbox]');
checkboxesGimnasia.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const unidades = document.getElementById('unidades' + this.id.charAt(0).toUpperCase() + this.id.slice(1));
        if (this.checked) {
            unidades.classList.remove('oculto');
            unidades.classList.add('visible');
        } else {
            unidades.classList.remove('visible');
            unidades.classList.add('oculto');
        }
    });
});