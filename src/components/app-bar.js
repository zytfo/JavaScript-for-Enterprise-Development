import style from "../styles/app-bar.css"
import React from "react"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'


class ItemsAppBar extends React.Component {
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

export default connect()(withRouter(ItemsAppBar))