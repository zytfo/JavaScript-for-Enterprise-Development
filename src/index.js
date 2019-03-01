
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { ItemsList } from "./components/items-list"
import { ItemDetails } from "./components/item-details"
import { SearchBar } from "./components/search"
import ItemsAppBar from "./components/app-bar";

ReactDOM.render(
    <BrowserRouter>
        <main>
            <ItemsAppBar/>
            <Switch>
                <Route path="/search" component={SearchBar}/>
                <Route path="/profile/:id/items" component={ItemsList}/>
                <Route path="/profile/:id/item/:item_id" component={ItemDetails}/>
                <Redirect from="*" to="/search"/>
            </Switch>
        </main>
    </BrowserRouter>,
    document.getElementById('root')
);