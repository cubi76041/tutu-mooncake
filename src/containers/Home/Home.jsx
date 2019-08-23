import React, { Component } from 'react';
import Cover from '../Cover/Cover';

class Home extends Component {
  static state = {};

  render() {
    return (
      <main>
        <Cover />
        <div id="cakes">Cakes</div>
        <div id="story-teller">Story teller</div>
      </main>
    );
  }
}

export default Home;
