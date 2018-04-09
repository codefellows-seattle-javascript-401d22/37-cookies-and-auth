export const log = (...args) => __DEBUG__ ? console.log(...args) : undefined;
export const logError = (...args) => __DEBUG__ ? console.error(...args) : undefined;
export const renderIf = (test, component) => test ? component : undefined;
export const classToggler = (options) => Object.keys(options).filter(key => !!options[key]).join(' ');

export const photoToDataURL = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', () => {
      reject(reader.error);
    });

    if (file) return reader.readAsDataURL(file);
    return reject(new Error('File Require'));
  });
};

// from https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
export const readCookie = name => {
  var nameDisplay = name + '=';
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var cookie = ca[i];
    while (cookie.charAt(0)==' ') cookie = cookie.substring(1,cookie.length);
    if (cookie.indexOf(nameDisplay) == 0) return cookie.substring(nameDisplay.length,cookie.length);
  }
  return null;
};

export const createCookie = (name,value,days) => {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = '; expires='+date.toGMTString();
  } else { 
    expires = '';
    document.cookie = name+'='+value+expires+'; path=/';
  }
};

export const deleteCookie  = (name) => {
  createCookie(name,'',-1);
};

export const map = (list, ...args) => Array.prototype.map.apply(list, args);
export const filter = (list, ...args) => Array.prototype.filter.apply(list, args);
export const reduce = (list, ...args) => Array.prototype.reduce.apply(list, args);