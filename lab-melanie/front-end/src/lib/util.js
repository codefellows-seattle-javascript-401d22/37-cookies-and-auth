export const photoToDataUrl = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', () => {
      reject(reader.error);
    });

    if (file) return reader.readAsDataURL(file);
    return reject(new Error('user error - file is required'));
  });
};

export const log = (...args) => {
  __DEBUG__ ? console.log(...args) : undefined;
};

export const logError = (...args) => {
  __DEBUG__ ? console.error(...args) : undefined;
};

export const renderIf = (test, component) => test ? component : undefined;

export const classToggler = options => 
  Object.keys(options).filter(key => !!options[key].join(' '));

  // from: https://stackoverflow.com/questions/10730362/get-cookie-by-name
export const readCookie = name => {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
};
