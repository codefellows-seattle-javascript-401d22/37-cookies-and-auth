'use strict';

export const getCookie = (name) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

export const log = (...args) => 
  __DEBUG__ ? console.log(...args) : undefined;


export const logError = (...args) => 
  __DEBUG__ ? console.error(...args) : undefined;

export const renderIf = (test,component) => test ? component : undefined;

export const classToggler = (options) => 
  Object.keys(options).filter(key => !!options[key]).join(' ');

export const imagePreview = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    })

    reader.addEventListener('error', () => {
      reject(reader.error);
    });

    if(file) {
      return reader.readAsDataURL(file);
    }
    return reject( new Error('file required!'))
  });
}

export const map = (list, ...args) =>
  Array.prototype.map.apply(list, args);

export const filter = (list, ...args) => 
  Array.prototype.filter.apply(list, args);