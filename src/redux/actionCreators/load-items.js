import axios from "axios"
import * as actionCreators from "./index"

export const loadItemsActionCreator = (id, gameid) => (dispatch) => {
    axios.get(BACKEND_URL + 'profiles/' + id + '/inventory/json/' + gameid + '/2')
        .then(response => {
            dispatch(actionCreators.itemsListLoaded(response.data.rgDescriptions))
        })
        .catch((err) => {
            dispatch(actionCreators.itemsListLoadFailed())
        })
};

export const loadPriceActionCreator = (gameid, marketHashName) => (dispatch) => {

    dispatch(actionCreators.priceLoading());
    axios.get(BACKEND_URL + 'market/priceoverview/?appid=' + gameid + '&market_hash_name=' + marketHashName + '&currency=1')
        .then(response => {
            dispatch(actionCreators.priceLoaded(response.data.median_price))
        })
        .catch((err) => {
            dispatch(actionCreators.priceLoadFailed())
        })
};