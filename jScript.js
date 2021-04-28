const container = document.querySelector('.container');

let inteiro = 16;
let qtd = inteiro * inteiro;
setTable();

function setTable() {
  for (let i = 0; i < qtd; i++) {
    const div = document.createElement('div');
    div.style.cssText = 'background-color: #FFF;';
    div.classList.add('cell');
    container.appendChild(div);
  }
  container.style.cssText =
    'grid-template: repeat(' + inteiro + ', 1fr) / repeat(' + inteiro + ', 1fr);';
  const hover = document.getElementsByClassName('cell');

  for (let it = 0; it < hover.length; it++) {
    hover[it].addEventListener('mouseover', e => {
      event.target.style.backgroundColor = '#111';
    });
  }
}

const hover = document.getElementsByClassName('cell');

const clear_btn = document.querySelector('#clear');
clear_btn.addEventListener('click', e => {
  for (let it = 0; it < hover.length; it++) {
    hover[it].style.backgroundColor = '#FFF';
  };
  let enter = parseInt(prompt('What size?'));
  if (enter > 100) {
    alert('Max size = 100');
  } else {
    inteiro = enter;
    qtd = inteiro * inteiro;
    setTable();
  }
})

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', e => {
  for (let it = 0; it < hover.length; it++) {
    let randomColor = Math.floor(Math.random() * 360);
    hover[it].addEventListener('mouseover', e => {
      event.target.style.backgroundColor = 'hsla(' + randomColor + ', 50%, 50%, 0.5)';
    });
  }
})

const blackAgain = document.querySelector('#black-again');
blackAgain.addEventListener('click', e => {
  for (let it = 0; it < hover.length; it++) {
    hover[it].addEventListener('mouseover', e => {
      event.target.style.backgroundColor = '#111';
    });
  }
})
