'use strict';

export default store => next => action => (
  // the action we got, is it a basic object literal? if it's not 
  typeof action === 'function'
  ? action(store.dispatch, store.getState)
  : next(action)
)