import React, { Component } from 'react'
import prankfuly from './prankfuly1.png'
import { Segment, Image, Container } from 'semantic-ui-react'

class HomePage extends Component {
  render(){
    return(
      <div>
      <Segment basic>
        <Image
          src={prankfuly}
          size='medium'
          centered
          />
      </Segment>
      <Container textAlign="center">
        <p>
        Prankfully is about showing people pranks that you can buy. You and whoever you
        prank can have a good laugh.
        </p>

        <p>
        Prankfully was born when Abigail and Ella wanted to make a prank business.
        </p>

        <p>
        Our first prank was on Ella's sister, when Ella put white goop on her sister's doornob.
        </p>
      </Container>
      </div>
    )
  }
}

export default HomePage
