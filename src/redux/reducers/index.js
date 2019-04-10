const initialState = {
    data: [],
    itemsLoadingFailed: false
};

export const reducer = (oldStore = initialState, action) => {

    console.log('Reducer called with action', action);
    if (action.type === 'ITEMS_LIST_LOADED') {
        return {
            data: action.data,
            itemsLoadingFailed: false
        }
    }

    if(action.type === 'ITEMS_LIST_LOADED_FAILED') {
        return {
            data: [],
            itemsLoadingFailed: true
        }
    }
    return oldStore
};