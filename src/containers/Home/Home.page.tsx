import React, { Component } from 'react';
import { TITLE_HOME_PAGE } from '../../constants';
import reactLogo from '../../assets/images/react.svg';
import './Home.scss';
class Home extends Component {
  state = {
    title: 'React Boilerplate',
  };

  componentDidMount() {
    console.log('GET CONSTANT: ', TITLE_HOME_PAGE);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="home-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <img src={reactLogo} className="rotate" alt="react-logo" />
              <h1>{title}</h1>
              <p>
                This template project was designed for easy scalability apps.
              </p>
              <small>Architecture by Thomi Jasir</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
