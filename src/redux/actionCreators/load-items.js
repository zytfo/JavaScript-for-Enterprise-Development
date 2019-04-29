import axios from "axios"
import * as actionCreators from "./index"

export const loadItemsActionCreator = (id, gameid) => (dispatch) => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://steamcommunity.com/profiles/${id}/inventory/json/${gameid}/2`)
        .then(response => {
            dispatch(actionCreators.itemsListLoaded(response.data.rgDescriptions))
        })
        .catch((err) => {
            dispatch(actionCreators.itemsListLoadFailed())
        })
};