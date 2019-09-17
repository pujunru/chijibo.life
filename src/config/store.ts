import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const configureStore = (preloadedState) => {
    const logger = createLogger({
        duration: true,
        collapsed: true,
    })
    const store = createStore(
        rootReducer,
        preloadedState,
        // composeWithDevTools(applyMiddleware(...middlewares)),
    )
    return store
}

export default configureStore
