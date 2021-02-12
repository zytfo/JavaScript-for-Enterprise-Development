const initialState = {
    data: [],
    price: void 0,
    itemsLoadingFailed: false,
    priceIsLoading: false,
    priceLoadingFailed: false
};

export const reducer = (oldStore = initialState, action) => {

    console.log('Reducer called with action', action);
    if (action.type === 'ITEMS_LIST_LOADED') {
        initialState.data = action.data;
        return {
            data: action.data,
            price: void 0,
            itemsLoadingFailed: false,
            priceIsLoading: false,
            priceLoadingFailed: false
        }
    }

    if (action.type === 'ITEMS_LIST_LOADED_FAILED') {
        return {
            data: [],
            price: void 0,
            itemsLoadingFailed: true,
            priceIsLoading: false,
            priceLoadingFailed: false
        }
    }

    if (action.type === 'PRICE_LOADED') {
        let price = action.price.replace("$", "");
        let priceFloat = parseFloat(price);
        priceFloat *= 65.12;
        action.price = priceFloat.toFixed(2);
        action.price += ' рубля (-ей)';

        return {
            data: initialState.data,
            price: action.price,
            itemsLoadingFailed: false,
            priceIsLoading: false,
            priceLoadingFailed: false
        }
    }

    if (action.type === 'PRICE_LOAD_FAILED') {
        return {
            data: initialState.data,
            price: void 0,
            itemsLoadingFailed: false,
            priceIsLoading: false,
            priceLoadingFailed: true
        }
    }

    if (action.type === 'PRICE_LOADING') {
        return {
            data: initialState.data,
            price: void 0,
            itemsLoadingFailed: false,
            priceIsLoading: true,
            priceLoadingFailed: false
        }
    }
    return oldStore
};
