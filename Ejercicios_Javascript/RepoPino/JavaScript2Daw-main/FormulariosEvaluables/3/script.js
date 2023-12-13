const d = document;
let salario = d.getElementById('salario').value;
let edad = d.getElementById('edad').value;
let campo = d.getElementById('campo');

document.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.matches('#enviar')) {
    if (salario >= 1000 && salario <= 2000 && edad >= 50)
      campo.innerHTML = `Tu salario es ${salario * 1.1}`;
    else if (salario >= 1000 && salario <= 2000 && edad < 50)
      campo.innerHTML = `Tu salario es ${salario * 1.05}`;
    else if (salario < 1000 && edad >= 50 && edad <= 60)
      campo.innerHTML = `Tu salario es ${salario * 1.15}`;
    else if (salario < 1000 && edad < 50)
      campo.innerHTML = `Tu salario es ${salario * 1.075}`;
    else if (salario < 1000 && edad > 60)
      campo.innerHTML = `Tu salario es ${salario * 1.2}`;
  }
});
