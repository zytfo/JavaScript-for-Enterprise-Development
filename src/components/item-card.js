import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styles from '../styles/item-card.css';

export const ItemCard = ({ item }) => (
    <Grid item sm={'6'} md={'4'} lg={'3'}>
        <Card className={styles.card}>
            <CardMedia
                className={styles.media}
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