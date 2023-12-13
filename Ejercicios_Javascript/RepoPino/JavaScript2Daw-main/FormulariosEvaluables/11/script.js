document.querySelectorAll('span[name=pulsar]').forEach((value, index) => {
  value.addEventListener('mouseover', () => {
    document.querySelectorAll('span[class=texto]')[index].style.display =
      'block';
  });
});

document.querySelectorAll('span[name=pulsar]').forEach((value, index) => {
  value.addEventListener('mouseout', () => {
    document.querySelectorAll('span[class=texto]')[index].style.display =
      'none';
  });
});
