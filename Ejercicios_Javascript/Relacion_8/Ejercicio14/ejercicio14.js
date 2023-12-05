document.addEventListener('DOMContentLoaded', function () {
    let velocidad = 0;
    const incrementoVelocidad = document.getElementById('velocidad');

    function updateVelocidad() {
        incrementoVelocidad.textContent = `Velocidad ${velocidad}`;
    }

    function aumentaVelocidad() {
        if (velocidad < 100) {
            velocidad += 1;
            updateVelocidad();
        }
    }

    function dismunuyeVelocidad() {
        if (velocidad > 0) {
            velocidad -= 1;
            updateVelocidad();
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowUp') {
            aumentaVelocidad();
        } else if (event.key === 'ArrowDown') {
            dismunuyeVelocidad();
        }
    });
});
