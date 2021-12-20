// Made by eeex.ru — 2021
// This file contains helper functions and other things

'use strict';


// Console banner


// Debounce
function debounce(func){
  var timer;
  return function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
}


// Shorthands
const query    = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
const fromId   = document.getElementById.bind(document);

const l = console.log.bind(console);


// Disabling link dragging
queryAll('*').forEach(el => {
  el.ondragstart = () => {
    return false;
  };
})


// Getting scrollbar width
let _wrapperSnap = query('.wrapper-snap');
function setScrollbarWidth() {
  document.documentElement.style.setProperty('--scrollbar-width', window.innerWidth - _wrapperSnap.clientWidth + 'px');
}

setTimeout(setScrollbarWidth, 1);

window.addEventListener('resize', debounce(setScrollbarWidth));