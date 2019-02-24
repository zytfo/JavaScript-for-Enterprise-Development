import ReactLoading from 'react-loading';
import Grid from '@material-ui/core/grid';
import axios from 'axios';
import React from "react";
import { ItemCard } from "./item-card"
import styles from '../styles/loading-screen.css';

export class ItemsList extends React.Component {
    state = {};

    getQuery = (props) => props.location.pathname.replace('/profile/76561198167602704/items', '').replace('/profile/76561198167602704/', '')

    componentDidMount() {
        // axios
        //     // .get('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=BE7A98D5D05DBFBCA13F5F586E13AAC7&steamids=76561198167602704')
        //     // .get('https://cors-anywhere.herokuapp.com/http://steamcommunity.com/76561198167602704/440/2?l=english&count=100')
        //     // .get('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IEconItems_440/GetPlayerItems/v0001/?key=BE7A98D5D05DBFBCA13F5F586E13AAC7&steamid=76561198167602704&format=json')
        //     .get('https://cors-anywhere.herokuapp.com/http://steamcommunity.com/profiles/76561198167602704/inventory/json/440/2')
        //     .then(response => {
        //         this.setState({
        //             data: response.data.rgDescriptions
        //         });
        //     })
        this.loadItems(this.getQuery(this.props))
    }

    loadItems = () => {
        this.setState({ error: void 0 })
        axios.get(`https://cors-anywhere.herokuapp.com/http://steamcommunity.com/profiles/76561198167602704/inventory/json/440/2`)
            .then(response => {
                this.setState({ data: response.data.rgDescriptions })
            })
            .catch((err) => {
                this.setState({
                    error: 'No results from API'
                })
            })
    }

    buildDetailsClickHandler = (item) => () => {
        this.props.history.push(`/profile/76561198167602704/item/${item.classid}`)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.loadItems(this.getQuery(nextProps))
    }

    render() {
        if (this.state.error) {
            return <h3>{this.state.error}</h3>
        }

        if(!this.state.data) {
            return <div><ReactLoading className={styles.loading} type={"spokes"} color={"#fff"} height={'10%'} width={'10%'} /></div>
        }
        let newData = Object.values(this.state.data);
        console.log(newData);
        return (
            <div>
                <Grid container spacing={8}>
                    {newData.map(item =>
                        <ItemCard
                            key={item}
                            item={item}
                            handleDetailsClick={this.buildDetailsClickHandler(item)}
                        />
                    )}
                </Grid>
            </div>
        );
    }
}