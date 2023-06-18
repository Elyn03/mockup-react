import {Fragment} from 'react';
import '../../App.css';
import Button from './button';

const Left = () => {
 return (
  <Fragment>
   <div className="left">
    <h1>Centre médical</h1>
    <p>
    Nous nous engageons avec passion pour la santé et le bien-être de la Nouvelle-Zélande et pour fournir le meilleur soutien, les meilleurs soins et les meilleurs conseils à nos communautés.
    </p>
    <Button/>
   </div>
  </Fragment>
 );
}

export default Left;