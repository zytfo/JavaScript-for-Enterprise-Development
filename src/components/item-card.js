import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import style from '../styles/item-card.css';

export const ItemCard = ({ item }) => (
    <Grid item sm={12} md={8} lg={6}>
        <Card className={style.card}>
            <CardMedia
                className={style.media}
                image={"https://steamcommunity-a.akamaihd.net/economy/image/class/440/".concat(item.classid).concat("/333fx171f.jpg")}
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
            {/* <CardActions>
                <Button size="small" color="primary">
                    <span className={'class'}>Details</span>
                </Button>
            </CardActions> */}
        </Card>
    </Grid>
)