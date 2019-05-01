export const itemsListLoaded = (data) => ({
    type: 'ITEMS_LIST_LOADED',
    data
});

export const itemsListLoadFailed = () => ({
    type: 'ITEMS_LIST_LOAD_FAILED'
});