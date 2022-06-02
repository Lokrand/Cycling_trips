const bikeDaD = document.querySelector('.content__sticky-container');
const container = document.querySelector('.content__container')
bikeDaD.ondragstart = function() {
  return false;
};
bikeDaD.onmousedown = function(event) { // (1) отследить нажатие
  let shiftX = event.clientX - bikeDaD.getBoundingClientRect().left;
  let shiftY = event.clientY - bikeDaD.getBoundingClientRect().top;
  // (2) подготовить к перемещению:
  // разместить поверх остального содержимого и в абсолютных координатах
  bikeDaD.style.position = 'absolute';
  bikeDaD.style.zIndex = 1000;
  // переместим в body, чтобы мяч был точно не внутри position:relative
  // document.body.append(bikeDaD);
  body.append(bikeDaD)
  // document.querySelector('.content__container').append(bikeDaD);
  // и установим абсолютно спозиционированный мяч под курсор
  moveAt(event.pageX, event.pageY);

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(pageX, pageY) {
    bikeDaD.style.left = pageX - shiftX + 'px';
    bikeDaD.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) перемещать по экрану
  document.addEventListener('mousemove', onMouseMove);

  // (4) положить мяч, удалить более ненужные обработчики событий
  bikeDaD.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    bikeDaD.onmouseup = null;
  };

};
