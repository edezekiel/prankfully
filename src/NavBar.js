import React, { Component } from 'react'
import { Menu, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render(){
    return(
      <Segment basic inverted style={{"margin-bottom": "0"}}>
        <Menu inverted size="massive" stackable>
          <Link to="/" className="item">
            <Header inverted as='h3'>Prankfully</Header>
          </Link>
          <Link to="/pranks" className="item">
            <Header inverted as='h3'>Pranks</Header>
          </Link>
        </Menu>
      </Segment>

    )
  }
}

export default NavBar
