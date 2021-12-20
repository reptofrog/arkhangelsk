// Made by eeex.ru — 2021

let frame__third = query('.frame--third');
let header = query('.header');
let wrapperSnap = query('.wrapper-snap');

let lastKnownScrollPosition = wrapperSnap.scrollY;
let ticking = false;

wrapperSnap.addEventListener('scroll', () => {
  lastKnownScrollPosition = wrapperSnap.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      let frameTop = frame__third.getBoundingClientRect().top;
      let scrollPercentage = ((-frameTop) / (wrapperSnap.offsetHeight)) * 100;

      wrapperSnap.style.scrollSnapType = scrollPercentage >= 101 ? 'unset' : 'y mandatory';

      if(scrollPercentage > 90) {
        header.classList.add('header--opaque');
      } else {
        header.classList.remove('header--opaque');
      }

      ticking = false;
    });
    ticking = true;
  }
});