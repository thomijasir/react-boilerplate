import React, { Component } from 'react';
import { IntlShape } from 'react-intl';
import { TITLE_HOME_PAGE } from '../../constants';
import reactLogo from '../../assets/images/react.svg';
import text from './Home.translation';
import './Home.scss';

export interface Props {
  intl: IntlShape;
}
class Home extends Component<Props> {
  state = {
    title: 'React Boilerplate',
  };

  componentDidMount() {
    console.log('Get All Props: ', this.props);
    console.log('GET CONSTANT: ', TITLE_HOME_PAGE);
  }

  render() {
    const { title } = this.state;
    const {
      intl: { formatMessage },
    } = this.props;
    return (
      <div className="home-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <img src={reactLogo} className="rotate" alt="react-logo" />
              <h1>{title}</h1>
              <p>{formatMessage(text.desc)}</p>
              <small>{formatMessage(text.info)}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
