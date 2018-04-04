'use strict';

export const log = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;
// if in production mode, don't show anything in the console

export const logError = (...args) => 
  __DEBUG__ ? console.error(...args) : undefined;

export const renderIf = (test, component) => test ? component : undefined;

export const classToggler = (options) =>
  Object.keys(options).filter(key => !!options[key]).join(' ');
  // helps toggle between error and success classes
  