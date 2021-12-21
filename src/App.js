import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index.js';
import { GlobalFontStyle } from './static/icon-font/iconfont.js';
import {Globalstyle} from './style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import Login from './pages/login/index';
import Writer from './pages/writer/index';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div>
    <Globalstyle />
    <GlobalFontStyle/>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/writer' element={<Writer />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
