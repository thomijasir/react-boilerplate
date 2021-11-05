import React, { Component } from 'react';

class Home extends Component {
  state = {
    title: "Home Page"
  }

  componentDidMount() {
    console.log('This is First Page');
  }

  render() {
    const { title } = this.state;
    return <h1>{title}</h1>
  }
}

export default Home;