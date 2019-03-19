const subscribers = [];

let store = [];

export const itemsListLoaded = (data) => ({
    type: 'ITEMS_LIST_LOADED',
    data
});

const reducer = (action, oldStore) => {

    if(action.type === 'ITEMS_LIST_LOADED') {
        return action.data
    }
    return oldStore
};

export const dispatch = (action) => {
    console.log('Dispatched action:', action);
    store = reducer(action, store);
    subscribers.forEach((subscriber) => {
        subscriber(store)
    })
};

export const getState = () => store;

export const subscribe = (fn) => {
    subscribers.push(fn)
};
