import React, {Component} from 'react'
import CharacterCard from './components/CharacterCard'

export default class DisplayCharacter extends Component {

    render() {

        return(
            <div>
                <div>
                    {this.props.characters.map((character) => <CharacterCard character={character}/>)}
                </div>
                
            </div>
        )
    }
}