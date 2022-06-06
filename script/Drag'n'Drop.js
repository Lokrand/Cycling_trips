const bikeDaD = document.querySelector('.content__sticky-container');
const container = document.querySelector('.content__container')
bikeDaD.ondragstart = function() {
  return false;
};
bikeDaD.onmousedown = function(event) {
  console.log(event, bikeDaD.getBoundingClientRect())
  console.log(container.getBoundingClientRect())
  let shiftX = event.clientX - bikeDaD.getBoundingClientRect().left;
  let shiftY = event.clientY - bikeDaD.getBoundingClientRect().top;

  bikeDaD.style.position = 'absolute';
  bikeDaD.style.zIndex = 1000;

  function moveAt(pageX, pageY) {
    let left = pageX - shiftX - container.getBoundingClientRect().left;
    let top = pageY - shiftY - container.getBoundingClientRect().top;
    if (top < 0) {
      top = 0;
    } else if (top > container.getBoundingClientRect().height - bikeDaD.getBoundingClientRect().height) {
      top = container.getBoundingClientRect().height - bikeDaD.getBoundingClientRect().height;
    }
    if (left > container.getBoundingClientRect().width - bikeDaD.getBoundingClientRect().width) {
      left = container.getBoundingClientRect().width - bikeDaD.getBoundingClientRect().width
    }
    bikeDaD.style.left = Math.max(left, 0) + 'px';
    bikeDaD.style.top = Math.max(top, 0) + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null;
  };
};
