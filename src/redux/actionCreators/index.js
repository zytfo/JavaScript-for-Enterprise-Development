export const itemsListLoaded = (data) => ({
    type: 'ITEMS_LIST_LOADED',
    data
});

export const itemsListLoadFailed = () => ({
    type: 'ITEMS_LIST_LOAD_FAILED'
});

export const priceLoaded = (price) => ({
    type: 'PRICE_LOADED',
    price
});

export const priceLoading = () => ({
    type: 'PRICE_LOADING'
});

export const priceLoadFailed = () => ({
    type: 'PRICE_LOAD_FAILED'
});