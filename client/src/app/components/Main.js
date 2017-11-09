
import React, { Component } from 'react';
import { Button,Segment,Header } from 'semantic-ui-react';


class Main extends Component {
  render() {
    return (
      <div >
        <Segment clearing>
            <Header  as='h1' textAlign='center'>
                MOVIES
            </Header>
        </Segment>
      </div>
    );
  }
}


export default Main;
