import React, {Component} from 'react'
import CharacterCard from '../components/CharacterCard'
import SearchCharacter from '../components/SearchCharacter'


export default class DisplayCharacter extends Component {

    render() {

        return(
            <div>
                <SearchCharacter searchText={this.props.search} handleSearch={this.props.handleSearch}/>
                <div>
                    {this.props.character.map((character) => <CharacterCard character={character} show={this.props.show} key={character.id}/>)}
                </div>
            </div>
        )
    }
}