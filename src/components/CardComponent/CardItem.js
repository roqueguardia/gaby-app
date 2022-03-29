import React from 'react';
import {Typography, CardMedia, CardContent, Card} from '@mui/material';

    


    const CardItem = ({name, age, description, img, altName}) => {
    return (

    <Card sx={{ maxWidth: 300 }} className='cardItem'>
        <CardMedia
        component="img"
        height="140"
        image={img}
        alt={altName}
    />

    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {age}
            {description}
        </Typography>
    </CardContent>

    </Card>
    );
}

export default CardItem;
