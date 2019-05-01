const redux = require('redux');
const createStore = redux.createStore;

let initialState = {
    counter: 0
}

/** 
 * Reducer -
 * is the one which changes the state
 * If reducer is not explicitly called with any value then we can assign it to default value like state = initialState
 */
const rootReducer = (state = initialState, action) => {
    if (action.type == 'INC_COUNTER') {
        /**
         * We should not modify the state directly as it is immutable
         */
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type == 'ADD_COUNTER') {
        /**
         * We should not modify the state directly as it is immutable
         */
        return {
            /**
             * Take the copy of the state
             * and then modify the counter
             */
            ...state,
            counter: state.counter + action.someValue
        }
    }

    return state;
}

/**
 * Store
 */
const store = createStore(rootReducer)
console.log(store.getState())

/**
 * Subscription
 */
store.subscribe(() => {
    console.log('Subscription called', store.getState())
});

/**
 * Dispatcher
 */
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', someValue: 10 });
console.log(store.getState())
