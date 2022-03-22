import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './CardItem.css';

const CardItem = ({name,age,description,img}) => {
return (
        <div>
    <Card  className='container'>
        <CardBody>
        <CardTitle tag="h5">
            {name}
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            {age}
        </CardSubtitle>
        <CardText>
            {description}
        </CardText>
        {img}
        <Button>
            Button
        </Button>
        </CardBody>
    </Card>
    </div>
    )
}

export default CardItem