import React, { Component } from 'react';
import { render } from 'react-dom';
import CallbackExample from './CallbackExample';
import PromiseExample from './PromiseExample';
import RxjsExample from './RxjsExample';
import AsyncExample from './AsyncExample';
import QExample from './QExample';
import BluebirdExample from './BluebirdExample';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className="container">
        <CallbackExample />
        <hr />
        <PromiseExample />
        <hr />
        <RxjsExample />
        <hr />
        <AsyncExample />
        <hr />
        <QExample />
        <hr />
        <BluebirdExample />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
