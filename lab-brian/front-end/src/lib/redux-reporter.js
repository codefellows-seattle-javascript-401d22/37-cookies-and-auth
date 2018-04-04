const reporter = store => next => action => {
  // console.log('REPORTER-ACTION: ', action);
  try {
    let result = next(action);
    // console.log('REPORTER-STATE: ', store.getState());
    return result;
  } catch (error) {
    error.action = action;
    console.error('ERROR: ', error);
    return error;
  }
};

export default reporter;