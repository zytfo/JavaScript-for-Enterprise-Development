import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

import styles from "../styles/item-details.css"
import ReactLoading from 'react-loading';
import stylesLoading from '../styles/loading-screen.css';

export class ItemDetails extends React.Component {

    state = { item: void 0 };

    loadItemsDetails = (id, gameid, item_id) => {
        fetch(`https://cors-anywhere.herokuapp.com/http://steamcommunity.com/profiles/${id}/inventory/json/${gameid}/2/`)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({ item: data.rgDescriptions, item_id: item_id, gameid: gameid })
            })
    };

    componentDidMount() {
        if (this.props.match.params) {
            this.loadItemsDetails(this.props.match.params.id, this.props.match.params.gameid, this.props.match.params.item_id);
        }
    }


    render() {

        const { item } = this.state;

        if (!item) {
            return <div><ReactLoading className={stylesLoading.loading} type={"spokes"} color={"#1c2735"} height={'10%'} width={'10%'}/></div>
        }
        let items = Object.values(this.state.item);
        const thing = items.find(x => x.classid === this.state.id);
        const game = items.find(x => x.appid === this.state.gameid);

        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} md={6} lg={4}>
                    <Card className={styles.card}>
                        <CardMedia
                            className={styles.media}
                            image={`https://steamcommunity-a.akamaihd.net/economy/image/class/${game.appid}/${thing.classid}/333fx171f.jpg`}
                            title="Avatar"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {thing.name}
                            </Typography>
                            <Typography>
                                Type: {thing.type}
                            </Typography>
                            <hr/>
                            <Table className={''}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">Name color</TableCell>
                                        <TableCell align="right">{thing.name_color}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Tradability</TableCell>
                                        <TableCell align="right">{thing.tradable}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Marketable</TableCell>
                                        <TableCell align="right">{thing.marketable}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Commodity</TableCell>
                                        <TableCell align="right">{thing.commodity}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}
