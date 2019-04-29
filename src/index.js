
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import ItemsList from "./components/items-list"
import { ItemDetails } from "./components/item-details"
import { SearchBar } from "./components/search"
import ItemsAppBar from "./components/app-bar";
import { store } from "./redux/store";
import { Provider } from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <main>
                <ItemsAppBar/>
                <Switch>
                    <Route path="/search" component={SearchBar}/>
                    <Route path="/profile/:id/:gameid/:items" component={ItemsList}/>
                    <Route path="/profile/:id/:gameid/item/:item_id" component={ItemDetails}/>
                    <Redirect from="*" to="/search"/>
                </Switch>
            </main>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);