import { combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from "redux-thunk"

import counterReducer from './modules/counter/counter.module';
import customMiddlewares from './middleware';

export const history = createBrowserHistory()

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  counter: counterReducer
})

export const store = function configureStore(preloadedState?: any) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), thunk, ...customMiddlewares),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    )
  )
  return store
}