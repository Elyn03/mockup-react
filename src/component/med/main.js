import {Fragment} from 'react';
import Left from './left';
import Right from './right';
import '../../App.css';

const Main = () => {
 return (
  <Fragment>
   <div className="Main">
    <Left/>
    <Right/>
   </div>
  </Fragment>
 );
}

export default Main;