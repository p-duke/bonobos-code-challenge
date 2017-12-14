import React from 'react';
import { ToggleButtonGroup, ToggleButton, ButtonToolbar } from 'react-bootstrap';
import { uniq, startCase } from 'lodash';

const ProductInventory = (props) => {
    const { inventories } = props;
    const waists = uniq(inventories.map(item => item.waist));
    const lengths = uniq(inventories.map(item => item.length));
    const styles = uniq(inventories.map(item => item.style));

    return (
      <div>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="waist" >
            <h4>Waist</h4>
            { waists.map((size, idx) => <ToggleButton id="inventory__button" key={idx} data-product-id={props.productId} onMouseDown={props.onInventoryChange} value={size}>{size}</ToggleButton>) }
          </ToggleButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="length" >
            <h4>Length</h4>
            { lengths.map((size, idx) => <ToggleButton  id="inventory__button" key={idx} data-product-id={props.productId} onMouseDown={props.onInventoryChange}  value={size} >{size}</ToggleButton>) }
          </ToggleButtonGroup>
        </ButtonToolbar>

        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="style" >
            <h4>Style</h4>
            { styles.map((style, idx) => <ToggleButton  id="inventory__button" key={idx} data-product-id={props.productId} onMouseDown={props.onInventoryChange} value={style}>{startCase(style)}</ToggleButton>) }
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }

export default ProductInventory;

