import React from 'react';
import styles from '../styles/search.css';
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from "@material-ui/core/Typography";


export class SearchBar extends React.Component {
    state = {
        id: ""
    };

    buildDetailsClickHandler = () => {
        this.props.history.push('/profile/'.concat(this.state.id).concat('/items/'));
    };

    updateInput = (event) => {
        this.setState({
            id: event.target.value
        })
    };

    render() {
        return (
            <div>
                <Typography className={styles.row} gutterBottom variant="h5" component="h2">
                    Enter a valid Steam id (e.g. 76561198205886600). Otherwise it will never load.
                </Typography>
                <Paper className={styles.root} elevation={1}>
                    <InputBase className={styles.input} value={this.state.id} placeholder="Search Steam Profile ID" onChange={this.updateInput}/>
                    <IconButton className={styles.iconButton} aria-label="Search" onClick={this.buildDetailsClickHandler}>
                        <SearchIcon />
                    </IconButton>
                    <Divider className={styles.divider} />
                </Paper>
            </div>
        );
    }
}