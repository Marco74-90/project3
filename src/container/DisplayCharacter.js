import React, {Component} from 'react'
import CharacterCard from '../components/CharacterCard'

export default class DisplayCharacter extends Component {

    render() {

        return(
            <div>
                <div>
                    {this.props.character.map((character) => <CharacterCard character={character} show={this.props.show} key={character.id}/>)}
                </div>
                
            </div>
        )
    }
}