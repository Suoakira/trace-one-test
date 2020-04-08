import React from 'react'
import { Card, Button } from 'react-bootstrap';

export default function ListItem({ event, url }) {

    return (

        <Card style={{ width: '14rem', display: 'inline-block', margin: "10px" }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>
                    {event.description}
                </Card.Text>
                <Button variant="primary">Wash hands</Button>
            </Card.Body>
        </Card>

    )
}
