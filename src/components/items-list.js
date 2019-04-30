import ReactLoading from 'react-loading';
import React from "react";
import { ItemCard } from "./item-card"
import styles from '../styles/loading-screen.css';
import style from '../styles/item-list.css';
import { Grid } from './grid';
import { connect } from "react-redux"
import { loadItemsActionCreator } from "../redux/actionCreators/load-items"

class ItemsList extends React.Component {
    getId = (props) => props.location.pathname.replace(`/profile/${this.props.match.params.id}/${this.props.match.params.gameid}/items/`, `${this.props.match.params.id}`);
    getGameId = (props) => props.location.pathname.replace(`/profile/${this.props.match.params.id}/${this.props.match.params.gameid}/items/`, `${this.props.match.params.gameid}`);
    getIdNextProps = (props) => props.location.pathname.replace(`/profile/${this.props.match.params.id}/${this.props.match.params.gameid}/item/104`, `${this.props.match.params.id}`);
    getGameIdNextProps = (props) => props.location.pathname.replace(`/profile/${this.props.match.params.id}/${this.props.match.params.gameid}/item/104`, `${this.props.match.params.gameid}`);

    componentDidMount() {
        if (this.props.data.length < 1) {
            this.props.loadItems(this.getId(this.props), this.getGameId(this.props));
        }
    }

    buildDetailsClickHandler = (item) => () => {
        this.props.history.push(`/profile/${this.props.match.params.id}/${this.props.match.params.gameid}/item/${item.classid}`);
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            console.log(nextProps);
            console.log(this.getIdNextProps(nextProps));
            console.log(this.getGameIdNextProps(nextProps));
            this.props.loadItems(this.getIdNextProps(nextProps), this.getGameIdNextProps(nextProps))
        }
    }

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