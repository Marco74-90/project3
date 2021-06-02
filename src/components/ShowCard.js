import React, {Component} from 'react'

export default class ShowCard extends Component {

    render() {

        return(
            <div>
                <img>{Image}</img>
                <h2>{Name}</h2>
            </div>
        )
    }
}