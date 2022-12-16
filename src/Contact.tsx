import { app, Component } from 'apprun';
import React from 'react';

export default class ContactComponent extends Component {
  state = 'Contact';

  view = state => <div>
    <h1>{state}</h1>
  </div>;

  update = {
    '#Contact': state => state,
  };
}

