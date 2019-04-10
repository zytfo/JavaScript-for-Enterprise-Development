import ReactLoading from 'react-loading';
import axios from 'axios';
import React from "react";
import { ItemCard } from "./item-card"
import styles from '../styles/loading-screen.css';
import style from '../styles/item-list.css';
import { Grid } from './grid';
import * as actionCreators from "../redux/actionCreators";
import { connect } from "react-redux"



class ItemsList extends React.Component {
    getQuery = (props) => props.location.pathname.replace(`/profile/${this.props.match.params.id}/items`, ``).replace(`/profile/${this.props.match.params.id}`, ``);

    componentDidMount() {
        if (this.props.data.length < 1) {
            this.loadItems(this.getQuery(this.props))
        }
    }

    loadItems = () => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://steamcommunity.com/profiles/${this.props.match.params.id}/inventory/json/440/2`)
            .then(response => {
                this.props.itemsListLoaded(response.data.rgDescriptions);
            })
            .catch((err) => {
                this.props.itemsListLoadFailed();
            })
    };

    buildDetailsClickHandler = (item) => () => {
        this.props.history.push(`/profile/${this.props.match.params.id}/item/${item.classid}`);
    };

    render() {
        if(!this.props.data) {
            return <div><ReactLoading className={styles.loading} type={"spokes"} color={"#1c2735"} height={'10%'} width={'10%'}/></div>
        }
        if (this.props.loadFailed) {
            return <h3>Error loading data from API</h3>
        }

        return (
            <div className={style.body}>
                <Grid container>
                    {Object.entries(this.props.data).map(item =>
                        <ItemCard
                            key={item[0]}
                            item={item[1]}
                            handleDetailsClick={this.buildDetailsClickHandler(item[1])}
                        />
                    )}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    loadFailed: state.itemsLoadingFailed
});

const mapDispatchToProps = (dispatch) => ({
    itemsListLoaded: (data) => {
        dispatch(actionCreators.itemsListLoaded(data))
    },
    itemsListLoadFailed: () => {
        dispatch(actionCreators.itemsListLoadFailed())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)