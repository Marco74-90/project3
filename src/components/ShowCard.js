import React, {Component} from 'react'
import {Card} from 'react-bootstrap'


export default class ShowCard extends Component {

    render() {
        const {id, name, image,} = this.props.show
        const {id, name, image,} = this.props.character // db keys should be specific

        return(
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <ListGroup className="list-group-flush">
                            
                        </ListGroup>
                        <Button variant="primary">like</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

//<ListGroupItem>Cras justo odio</ListGroupItem>