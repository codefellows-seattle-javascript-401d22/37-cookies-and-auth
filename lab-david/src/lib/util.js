'use strict';

export const log = (...args) => {
  __DEBUG__ ? console.log(...args) : undefined;
}

export const logError = (...args) => {
  __DEBUG__ ? console.error(...args) : undefined;
}

export const renderIf = (test, component) => test ? component : undefined;

export const classToggler = (options) => Object.keys(options).filter(key => !!options[key].join(' '));

export const photoToDataURL = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', () => {
      reject(reader.error);
    });

    if(file) {
      return reader.readAsDataURL(file);
    }

    return reject(new Error('use error - file required'));
  });
}

export const map = (list, ...args) => 
  Array.prototype.map.apply(list, args);

export const filter = (list, ...args) => 
  Array.prototype.filter.apply(list, args);

export const reduce = (list, ...args) => 
  Array.prototype.reduce.apply(list, args);

export const readCookie = name => {
  let nameEQ = `${name}=`;
  let cookiesAll = document.cookie.split(';');
  cookiesAll.forEach(cookie => {
    while(cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
    if(cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length, cookie.length);
  })
}