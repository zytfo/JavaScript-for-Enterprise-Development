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
import {ItemCard} from "./item-card";

export class ItemDetails extends React.Component {

    state = { item: void 0 };

    componentDidMount() {
        if (this.props.match.params) {
            this.setState({
                item: this.props.location.state,
                classid: this.props.match.params.itemid,
                gameid: this.props.match.params.gameid
            })
        }
    }


    render() {
        const { item } = this.state;
        if (!item) {
            return <div><ReactLoading className={stylesLoading.loading} type={"spokes"} color={"#1c2735"} height={'10%'} width={'10%'}/></div>
        }

        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} md={6} lg={4}>
                    <Card className={styles.card}>
                        <CardMedia
                            className={styles.media}
                            image={`https://steamcommunity-a.akamaihd.net/economy/image/class/${this.state.gameid}/${this.state.classid}/333fx171f.jpg`}
                            title="Avatar"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.name}
                            </Typography>
                            <Typography>
                                {item.type}
                            </Typography>
                            <hr/>
                            <Table className={''}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">Name color</TableCell>
                                        <TableCell align="right">{item.name_color}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Tradability</TableCell>
                                        <TableCell align="right">{item.tradable}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Marketable</TableCell>
                                        <TableCell align="right">{item.marketable}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Descriptions</TableCell>
                                    </TableRow>

                                    {Object.entries(item.descriptions).map(description =>
                                        <TableRow
                                                   key={description[0]}
                                                   item={description[1]}>
                                            <TableCell component="th" scope="row"></TableCell>
                                            <TableCell align="right">
                                                {description[1].value}
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}
