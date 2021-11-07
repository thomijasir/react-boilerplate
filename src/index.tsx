import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HELPER from './utils/Helper';
import APP_ROUTER from './services/Router';
import translations from './constants/translations';
import './assets/app.scss';

class Main extends Component {
  state = {
    appReady: true,
  };

  renderRouter = () => (
    <BrowserRouter>
      <Routes>
        {APP_ROUTER.map((item) => (
          <Route {...item} element={<item.element />} />
        ))}
        <Route path="*" element={<p>404 Page</p>} />
      </Routes>
    </BrowserRouter>
  );

  render() {
    const { appReady } = this.state;
    return <>{appReady && this.renderRouter()}</>;
  }
}

const App = () => (
  <IntlProvider
    defaultLocale="en"
    locale={HELPER.getLang()}
    messages={translations[HELPER.getLang()]}
  >
    <Main />
  </IntlProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
