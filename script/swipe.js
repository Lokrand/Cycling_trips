const myBike = document.querySelectorAll('.bikes__type')

const renderNewBike = () => {
  const bike1 = document.querySelector("#bikes > div.bikes__types > div:nth-child(2)")
  const bike2 = document.querySelector("#bikes > div.bikes__types > div:nth-child(3)")
  const bike3 = document.querySelector("#bikes > div.bikes__types > div:nth-child(4)")
  bike1.addEventListener('touchstart', handleTouchStart, false);
  bike1.addEventListener('touchmove', handleTouchMove, false);
  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return evt.touches ||
          evt.originalEvent.touches;
  }

  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
  };

  function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
          if ( xDiff > 0 ) {
            console.log('right')
            ellipseFirst.classList.remove('bikes__ellipse_selected')
            ellipseThird.classList.remove('bikes__ellipse_selected')
            ellipseSecond.classList.add('bikes__ellipse_selected')
            document.querySelector("#bikes > div.bikes__types > div:nth-child(4)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(2)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(3)").style.display = 'block'
          } else {
            console.log('left')
            ellipseSecond.classList.remove('bikes__ellipse_selected')
            ellipseFirst.classList.remove('bikes__ellipse_selected')
            ellipseThird.classList.add('bikes__ellipse_selected')
            document.querySelector("#bikes > div.bikes__types > div:nth-child(2)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(3)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(4)").style.display = 'block'
          }
      }
      xDown = null;
      yDown = null;
  };




  bike2.addEventListener('touchstart', handleTouchStart2, false);
  bike2.addEventListener('touchmove', handleTouchMove2, false);
  var xDown = null;
  var yDown = null;

  function getTouches2(evt) {
    return evt.touches ||
          evt.originalEvent.touches;
  }

  function handleTouchStart2(evt) {
      const firstTouch = getTouches2(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
  };

  function handleTouchMove2(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
          if ( xDiff > 0 ) {
            console.log('right')
            ellipseSecond.classList.remove('bikes__ellipse_selected')
            ellipseFirst.classList.remove('bikes__ellipse_selected')
            ellipseThird.classList.add('bikes__ellipse_selected')
            document.querySelector("#bikes > div.bikes__types > div:nth-child(4)").style.display = 'block'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(3)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(2)").style.display = 'none'
          } else {
            console.log('left')
            ellipseThird.classList.remove('bikes__ellipse_selected')
            ellipseSecond.classList.remove('bikes__ellipse_selected')
            ellipseFirst.classList.add('bikes__ellipse_selected')
            document.querySelector("#bikes > div.bikes__types > div:nth-child(4)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(3)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(2)").style.display = 'block'
          }
      }

      xDown = null;
      yDown = null;
  };



  bike3.addEventListener('touchstart', handleTouchStart3, false);
  bike3.addEventListener('touchmove', handleTouchMove3, false);
  var xDown = null;
  var yDown = null;

  function getTouches3(evt) {
    return evt.touches ||
          evt.originalEvent.touches;
  }

  function handleTouchStart3(evt) {
      const firstTouch = getTouches3(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
  };

  function handleTouchMove3(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
          if ( xDiff > 0 ) {
            console.log('right')
            ellipseThird.classList.remove('bikes__ellipse_selected')
            ellipseSecond.classList.remove('bikes__ellipse_selected')
            ellipseFirst.classList.add('bikes__ellipse_selected')
            document.querySelector("#bikes > div.bikes__types > div:nth-child(4)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(3)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(2)").style.display = 'block'
          } else {
            console.log('left')
            ellipseFirst.classList.remove('bikes__ellipse_selected')
            ellipseThird.classList.remove('bikes__ellipse_selected')
            ellipseSecond.classList.add('bikes__ellipse_selected')
            document.querySelector("#bikes > div.bikes__types > div:nth-child(4)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(2)").style.display = 'none'
            document.querySelector("#bikes > div.bikes__types > div:nth-child(3)").style.display = 'block'
          }
      }
      xDown = null;
      yDown = null;
  };
}
renderNewBike()
