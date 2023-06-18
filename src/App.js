import {Fragment} from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './component/med/header';
import Main from './component/med/main';
import Footer from './component/med/footer';

function App() {
  return (
    <Fragment className="App">
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>
  );
}

export default App;
