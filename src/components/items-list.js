import ReactLoading from 'react-loading';
import React from "react";
import { ItemCard } from "./item-card"
import styles from '../styles/loading-screen.css';
import style from '../styles/item-list.css';
import { Grid } from './grid';
import { connect } from "react-redux"
import { loadItemsActionCreator } from "../redux/actionCreators/load-items"

class ItemsList extends React.Component {
    getQuery = (props) => props.location.pathname.replace(`/profile/${this.props.match.params.id}/items`, `${this.props.match.params.id}`).replace(`${this.props.match.params.id}/`, `${this.props.match.params.id}`);

    componentDidMount() {
        if (this.props.data.length < 1) {
            this.props.loadItems(this.getQuery(this.props))
        }
    }

    buildDetailsClickHandler = (item) => () => {
        this.props.history.push(`/profile/${this.props.match.params.id}/item/${item.classid}`);
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.loadItems(this.getQuery(nextProps))
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
    loadItems: (query) => dispatch(loadItemsActionCreator(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)