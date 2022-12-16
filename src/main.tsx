import { app, Component } from 'apprun';

import React from 'react';
import * as ReactDOM from 'react-dom';
app.render = (el, vdom) => ReactDOM.render(vdom, el);

class MyComponent extends Component {
  state = 0;
  view = count => <div>
    <p>You clicked {count} times</p>
    <button onClick={() => this.run('add')}>
      Click me
    </button>
  </div>;
  update = {
    add: state => state + 1
  };
}
new MyComponent().start('my-app');
