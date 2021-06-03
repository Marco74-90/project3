import React, {Component} from 'react'

export default class SearchCharacter extends Component {

    render() {

        return(
            <div>
                <label htmlFor="character-search"></label>
                <input type="text" placeholder="Search Characters" onChange={(e) => this.props.handleSearch(e.target.value)} className="form-control search"></input>
            </div>   
        )
    }
}

