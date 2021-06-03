import React, {Component} from  'react'
import {Link,} from 'react-router-dom'

export default class Navbar extends Component {
    
    render() {

        return(
             <ul className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/Home"><li><button>Home</button></li></Link>
                <Link to="/Characters"><li><button>Characters</button></li></Link>
                <Link to="/Shows"><li><button>Shows</button></li></Link>
            </ul>
            
        )
    }
}
  