import React, {Component} from 'react'

export default class SearchShow extends Component {

    render() {

        return(
            <div>
                <label htmlFor="show-search"></label>
                <input type="text" placeholder="Search Shows" onChange={(e) => this.props.handleSearch(e.target.value)} className="form-control search"></input>
            </div>   
        )
    }
}
