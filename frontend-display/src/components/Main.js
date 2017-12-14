import React from 'react';
import { JUMBOTRON_IMAGE } from '../constants';
import { Image, Jumbotron } from 'react-bootstrap';
import Product from './Product';

const Main = (props) => {
  return ( 
    <div>
      <Jumbotron id='jumbotron--clear-padding'>
        <Image src={JUMBOTRON_IMAGE} responsive />
      </Jumbotron>
      { props.products
          ?
          props.products.map((product, key) => {
            return (
              <Product
                inventoryMatch={props.inventoryMatch}
                onInventoryChange={props.onInventoryChange}
                product={product}
                key={key} 
              />
            );
          })
          : <p>Loading...</p>
      }
    </div>
  );
}

export default Main;
