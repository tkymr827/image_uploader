import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';

export const ShowPictures = () => {
    return (
        <CardColumns>
            <Card>
                <Card.Img variant="top" src="../img/giphy.gif" />
                <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="../img/giphy.gif" />
                <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="../img/giphy.gif" />
                <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="../img/giphy.gif" />
                <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                </Card.Body>
            </Card>
        </CardColumns>
    );
};
