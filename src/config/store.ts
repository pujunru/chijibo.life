import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const configureStore = (preloadedState: any) => {
    const logger = createLogger({
        duration: true,
        collapsed: true,
    })

    const middlewares = [thunk, logger]
    
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middlewares)),
    )
    return store
}

export default configureStore
