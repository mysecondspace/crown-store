import { compose, createStore, applyMiddleware, Middleware } from 'redux'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import createSagaMiddleware from '@redux-saga/core'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'
import { rootSaga } from './root-saga'

export type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

type ExtendedPresistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPresistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware()

const presistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware))

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(presistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
