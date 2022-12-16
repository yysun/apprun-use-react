import app from 'apprun';

import * as ReactDOM from 'react-dom';
app.render = (el, vdom) => ReactDOM.render(vdom, el);

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';

new Layout().start(document.getElementById('root'));

const element = document.getElementById('my-app');
new Home().start(element);
new About().mount(element);
new Contact().mount(element);