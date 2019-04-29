import React from 'react';
import styles from '../styles/search.css';
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from "@material-ui/core/Typography";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
    'Team Fortress 2',
    'CS: GO',
    'Dota 2'
];

const ITEM_HEIGHT = 48;
let gameId = 440;

export class SearchBar extends React.Component {
    state = {
        id: "",
        anchorEl: null,
        game: ""
    };

    buildDetailsClickHandler = () => {
        // this.props.history.push(`/profile/${this.state.id}/${this.state.game}/items/`);
        this.props.history.push(`/profile/${this.state.id}/items/`);
    };

    updateInput = (event) => {
        this.setState({
            id: event.target.value
        })
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event) => {
        switch (event.nativeEvent.target.outerText) {
            case 'Team Fortress 2':
                gameId = 440;
                break;
            case 'CS: GO':
                gameId = 730;
                break;
            case 'Dota 2':
                gameId = 570;
                break;
        }
        this.setState( {
            anchorEl: null,
            game: gameId
        });
        console.log(this.state.game);
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <Typography className={styles.row} gutterBottom variant="h5" component="h2">
                    Enter a valid Steam id (e.g. 76561198205886600). Otherwise it will never load.
                </Typography>
                <Paper className={styles.root} elevation={1}>
                    <InputBase className={styles.input} value={this.state.id} placeholder="Search Steam Profile ID" onChange={this.updateInput} onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.buildDetailsClickHandler();
                        }
                    }}/>
                    <IconButton
                        aria-label="More"
                        aria-owns={open ? 'long-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={this.handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: 200,
                            },
                        }}
                    >
                        {options.map(option => (
                            <MenuItem key={option} selected={option === this.state.game} onClick={this.handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    <IconButton className={styles.iconButton} aria-label="Search" onClick={this.buildDetailsClickHandler}>
                        <SearchIcon />
                    </IconButton>
                    <Divider className={styles.divider} />
                </Paper>
            </div>
        );
    }
}