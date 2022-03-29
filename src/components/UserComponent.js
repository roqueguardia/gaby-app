import * as React from 'react';
import {Typography, CardMedia, CardContent, Card} from '@mui/material';


const UserComponent = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.avatar_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.repos_url}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default UserComponent;