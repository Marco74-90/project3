import React, {Component} from 'react'
import CharacterCard from '../components/CharacterCard'
import SearchBar from '../components/SearchBar'


export default class DisplayCharacter extends Component {

    render() {

        return(
            <div>
                <SearchBar searchText={this.props.searchText} handleSearch={this.props.handleSearch}/>
                <div>
                    {this.props.character.map((character) => <CharacterCard character={character} show={this.props.show} key={character.id} quote={this.props.quote}/>)}
                </div>
                
            </div>
        )
    }
}