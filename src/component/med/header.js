import {Fragment} from 'react';
import '../../App.css';

const Header = () => {
 return (
  <Fragment>
   <div className="Header">
    <h2>LOGO</h2>
    <div class="burger-icon">
     <span></span>
     <span></span>
     <span></span>
   </div>
   </div>
  </Fragment>
 );
}

export default Header;