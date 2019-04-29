import axios from "axios"
import * as actionCreators from "./index"

export const loadItemsActionCreator = (query) => (dispatch) => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://steamcommunity.com/profiles/${query}/inventory/json/440/2`)
        .then(response => {
            dispatch(actionCreators.itemsListLoaded(response.data.rgDescriptions))
        })
        .catch((err) => {
            dispatch(actionCreators.itemsListLoadFailed())
        })
};