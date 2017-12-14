import React from 'react';
import ProductInventory from './ProductInventory';
import { Image, Row, Col } from 'react-bootstrap';
import { startCase } from 'lodash';

const Product = (props) => {
  const { product } = props;
  const { inventories } = props.product;
  const { count }  = props.inventoryMatch;
  const { match } = props.inventoryMatch;
  const { productId } = props.inventoryMatch;

  return (
    <Row id={product.name.replace(' ', '-')} className="product">
      <Col md={3}>
        <Image className='product__image' src={product.image} thumbnail responsive />
      </Col>
      <Col md={4}>
        <h3>{startCase(product.name)}</h3>
        <p>{product.description}</p>
        { match && parseInt(productId, 10) === product.id
            ?
             count <= 10
              ? <p>Don't wait! There are only <strong>{count}</strong> pairs left in stock.</p>
              : <p>You're in luck! There are <strong>{count}</strong> pairs in stock.</p>
            :
            <p><strong>Please select a waist, length and style to see what's in stock.</strong></p>
        }
      </Col>
      <Col md={5}>
        <ProductInventory 
          onInventoryChange={props.onInventoryChange} 
          inventories={inventories}
          productId={product.id}
        />
      </Col>
    </Row>
  );
}

export default Product;
