import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import Style from '../style/Style.css'

export default class CharacterCard extends Component{
    

    likeQuote = () => {

        const likes = this.props.character.quotes[0].likes
    
        fetch(`http://localhost:9292/characters/${this.props.character.id}`, {

            headers:{"Content-Type": "application/json"},
            method:"PATCH",
            body: JSON.stringify({likes: likes + 1})
        })
            .then(res => res.json())
            .then(newLikes => this.props.newLikes(newLikes))
            
    }

    render() {

        const {name, image, age, quotes} = this.props.character
        const quote = quotes[0].quote
        const likes = quotes[0].likes
        
        




        return(
            <div>
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img className="image" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className="name">{name}</Card.Title>
                        <Card.Text className="info">Age: {age}</Card.Text>
                        <Card.Text className="info">{quote}</Card.Text>
                        <Button onClick={this.likeQuote} variant="primary">Likes: {likes}</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}