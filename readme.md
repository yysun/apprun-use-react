# Use React in AppRun Apps

[AppRun](https://apprun.js.org/) is an elm-inspired event-driven library, [React](https://reactjs.org/) is a popular JavaScript library for building user interfaces. Using React in the AppRun apps is one of the best ways to build web apps.


## Getting Started

- Run `npm start`


## How it's Made

This project was bootstrapped with the npm Create-AppRun-App command.

```sh
npm create apprun-app <my-project>
```

Then, we add React.

```sh
npm install react@17 react-dom@17 -D
```

> React 18 has breaking changes. Please use React 17 for now.

Then, we replace the AppRun rendering engine with React in the _main.tsx_.

```js
import React from 'react';
import * as ReactDOM from 'react-dom';
app.render = (el, vdom) => ReactDOM.render(vdom, el);
```

We also need to add React to each component.

```js
import { Component } from 'apprun';
import React from 'react';

export default class  extends Component {
}
```

That's all and have fun!

(C) 2022, Yiyi Sun