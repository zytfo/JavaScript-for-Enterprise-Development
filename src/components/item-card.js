import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styles from '../styles/item-card.css';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import { Grid } from './grid';

export const ItemCard = ({ item, handleDetailsClick }) => (
    <Grid item sm={6} md={4} lg={3}>
        <Card className={styles.card}>
            <CardMedia
                className={styles.media}
                image={`https://steamcommunity-a.akamaihd.net/economy/image/class/440/${item.classid}/333fx171f.jpg`}
                title="Name"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                </Typography>
                <Typography>
                    Type: {item.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handleDetailsClick}>
                    <span className={'class'}>Details</span>
                </Button>
            </CardActions>
        </Card>
    </Grid>
)