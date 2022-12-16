import app from 'apprun';

import React from 'react';
import * as ReactDOM from 'react-dom';
app.render = (el, vdom) => ReactDOM.render(vdom, el);

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';

app.render(document.getElementById('root'), <Layout />);

const element = 'my-app';
new Home().start(element);
new About().mount(element);
new Contact().mount(element);