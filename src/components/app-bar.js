import style from "../styles/app-bar.css"
import React from "react"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'


class ItemsAppBar extends React.Component {
    state = {
        searchQuery: this.props.location.pathname.replace('/items', '').replace('/', '')
    };

    render() {
        return (
            <AppBar position="static">
                <Toolbar className={style.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={style.title}>
                        Steam Inventory Explorer
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => ({
    operationsCount: state.data.length
});

export default connect(mapStateToProps)(withRouter(ItemsAppBar))