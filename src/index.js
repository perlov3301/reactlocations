// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppRegistry } from 'react-native';

// ReactDOM.render(<App />, document.getElementById('root'));
// App0 works
AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
    rootTag: document.getElementById("root")
});
serviceWorker.unregister();
