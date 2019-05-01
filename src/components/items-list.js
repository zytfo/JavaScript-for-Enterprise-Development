import ReactLoading from 'react-loading';
import React from "react";
import { ItemCard } from "./item-card"
import styles from '../styles/loading-screen.css';
import style from '../styles/item-list.css';
import { Grid } from './grid';
import { connect } from "react-redux"
import { loadItemsActionCreator } from "../redux/actionCreators/load-items"

let storedItem;
let currentProps = null;

class ItemsList extends React.Component {
    getId = (props) => props.location.pathname.replace(`/profile/${this.props.match.params.id}/${this.props.match.params.gameid}/items/`, `${this.props.match.params.id}`);
    getGameId = (props) => props.location.pathname.replace(`/profile/${this.props.match.params.id}/${this.props.match.params.gameid}/items/`, `${this.props.match.params.gameid}`);

    componentDidMount() {
        if (currentProps === null) {
            currentProps = this.props;
            this.props.loadItems(this.getId(this.props), this.getGameId(this.props));
        } else if (currentProps.location.pathname !== this.props.location.pathname) {
            currentProps = this.props;
            this.props.loadItems(this.getId(this.props), this.getGameId(this.props));
        }
    }

    buildDetailsClickHandler = (item) => () => {
        storedItem = item;
        this.props.match.params.classid = item.classid;
        this.props.history.push(
            `/profile/${this.props.match.params.id}/${this.props.match.params.gameid}/item/${this.props.match.params.classid}`,
            item
        );
    };

    render() {
        if (!this.props.data) {
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
    loadItems: (id, gameid) => dispatch(loadItemsActionCreator(id, gameid))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)