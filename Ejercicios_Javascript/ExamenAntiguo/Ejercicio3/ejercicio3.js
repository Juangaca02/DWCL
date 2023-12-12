const tabla = document.getElementById("tabla");
let arrayRandom = [];

document.addEventListener('click', e => {
    if (e.target.matches('#enviar')) {
        tabla.innerHTML = ``;
        arrayRandom = [];
        let dobles = document.getElementById("dobles").value;
        /*
                for (let i = 0; i < 14; i++) {
                    tabla.innerHTML += `<tr><td>Partido ${i}</td><td>1</td><td>X</td><td>2</td><tr>`;
                }
        */
        if (dobles > -1 && dobles < 14) {
            for (let i = 0; i < dobles; i++) {
                let random;
                do {
                    random = Math.floor(Math.random() * 14) + 1;
                } while (arrayRandom.includes(random))
                arrayRandom.push(random);
            }
            console.log(arrayRandom);

            for (let j = 1; j < 15; j++) {
                if (arrayRandom.includes(j)) {
                    const array1x2 = [];
                    while (array1x2.length < 2) {
                        let numDoble = Math.floor(Math.random() * 3) + 1;
                        if (!array1x2.includes(numDoble)) {
                            array1x2.push(numDoble);
                        }
                    }
                    array1x2.sort();
                    if (array1x2[0] == 1 && array1x2[1] == 2) {
                        tabla.innerHTML += `<tr><td>Partido ${j}</td><td>1</td><td> </td><td>2</td><tr>`;
                    }
                    if (array1x2[0] == 1 && array1x2[1] == 3) {
                        tabla.innerHTML += `<tr><td>Partido ${j}</td><td>1</td><td>X</td><td> </td><tr>`;
                    }
                    if (array1x2[0] == 2 && array1x2[1] == 3) {
                        tabla.innerHTML += `<tr><td>Partido ${j}</td><td> </td><td>X</td><td>2</td><tr>`;
                    }
                    console.log(array1x2);
                } else {
                    let numRandom = Math.floor(Math.random() * 3) + 1;
                    if (numRandom == 1) {
                        tabla.innerHTML += `<tr><td>Partido ${j}</td><td>1</td><td> </td><td> </td><tr>`;
                    } else if (numRandom == 2) {
                        tabla.innerHTML += `<tr><td>Partido ${j}</td><td> </td><td> </td><td>2</td><tr>`;
                    } else {
                        tabla.innerHTML += `<tr><td>Partido ${j}</td><td> </td><td>X</td><td> </td><tr>`;
                    }
                }
            }
            console.log(arrayRandom);
        } else {
            alert("No puedes hacer un pleno")
        }
    }


});