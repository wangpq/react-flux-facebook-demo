import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/App.less';
import App from './view/App';
import registerServiceWorker from './registerServiceWorker';
import 'element-theme-default';
import './assets/style/App.less';

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
