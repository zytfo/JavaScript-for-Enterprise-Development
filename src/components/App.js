import Grid from '@material-ui/core/grid';
import axios from 'axios';
import React, { Fragment } from "react";
import '../styles/app.css';

import { ItemCard } from "./item-card"

export class App extends React.Component {
    state = {}

    componentDidMount() {
        axios
            // .get('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=BE7A98D5D05DBFBCA13F5F586E13AAC7&steamids=76561198167602704')
            // .get('https://cors-anywhere.herokuapp.com/http://steamcommunity.com/76561198167602704/440/2?l=english&count=100')
            // .get('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IEconItems_440/GetPlayerItems/v0001/?key=BE7A98D5D05DBFBCA13F5F586E13AAC7&steamid=76561198167602704&format=json')
            .get('https://cors-anywhere.herokuapp.com/http://steamcommunity.com/profiles/76561198167602704/inventory/json/440/2')
            .then(response => {
                this.setState({
                    data: response.data.rgDescriptions
                });
            })
    }

    render() {
        if(!this.state.data) {
            return <h1>Loading</h1>
        }
        var newData = Object.values(this.state.data);
        console.log(newData);
        return (
                <Grid container spacing={16}>
                    {newData.map(item =>
                        <ItemCard key={item} item={item} />
                    )}
                </Grid>
        );
    }
}