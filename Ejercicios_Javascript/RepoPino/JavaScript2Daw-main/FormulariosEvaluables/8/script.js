let divs = document.querySelectorAll('div');
let body = document.getElementById('body');

document.addEventListener('mouseover', e => {
  divs.forEach(value => {
    if (e.target.matches(`#${value.id}`)) {
      body.style.backgroundColor = value.id;
    }
  });
});

document.addEventListener('mouseout', e => {
  divs.forEach(value => {
    if (e.target.matches(`#${value.id}`)) {
      body.style.backgroundColor = 'white';
    }
  });
});
