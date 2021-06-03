import React, {Component} from 'react'

export default class SearchBar extends Component {

    render() {

        return(
            <div>
                <label htmlFor="character-search"></label>
                <input  onchange={this.props.handleSearch} type="text"placeholder="Search Characters"/>
            </div>   
        )
    }
}

