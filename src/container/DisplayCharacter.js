import React, {Component} from 'react'
import Character from './components/Character'

export default class DisplayCharacter extends Component {

    render() {

        return(
            <div>
                <div>
                    {this.props.characters.map((character) => <Character character={character}/>)}
                </div>
                
            </div>
        )
    }
}