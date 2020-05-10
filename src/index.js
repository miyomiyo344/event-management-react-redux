import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// デバックしやすいように環境を整えるためのパッケージ
import { composeWithDevTools } from 'redux-devtools-extension'
// material-uiを使用するためのパッケージ
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import reducer from './reducers'
// 各コンポーネントをインポート
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';

// createStoreの第2引数にはenhancerというものを渡している
// enhancerがディブロップメントかそうでないかによって変わってくるようにする
// ディブロップメント環境においてはcomposeWithDevToolsでデバックできる状態にした
const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : (applyMiddleware(thunk))
const store = createStore(reducer, enhancer)

// ルーティングの設定
// MuiThemeProviderはmaterial-uiするために記述
// 最後のラップにカンマが入るので注意
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* exactとつけると書かれているパスに完全にマッチする場合のみ有効になる。マッチ条件が厳しくなる。 */}
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
          {/* 下記2つはどちらもルートのバス */}
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
