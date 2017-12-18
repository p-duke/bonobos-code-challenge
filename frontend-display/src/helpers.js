import { values } from 'lodash';

// once we have 3 inventory items selected filter on all products to find the inventory count
export const findProductInventoryCount = (params) => {
  const { products } = params;
  const { productId } = params;
  const { newInventorySelection } = params;
  const { inventoryMatch } = params;
  const currentProduct = products.filter(findProduct(productId)).pop();
  const newInventoryItem = currentProduct.inventories.filter(item => (
    item.waist === parseInt(newInventorySelection.waist, 10) && item.length === parseInt(newInventorySelection.length, 10) && item.style === newInventorySelection.style
  ));
  const newInventoryMatch = {...inventoryMatch, productId: productId, match: true, count: newInventoryItem.pop().count };

  function findProduct(productId) {
    return function(product) {
      return parseInt(productId, 10) === product.id;
    }
  }

  return newInventoryMatch;
};

// deselect product buttons
export const unselectPreviousProduct = (productId) => {
  const buttons = document.querySelectorAll('.active');
  function deselectButtons(productId) {
    return function(button) {
      if (button.dataset.productId !== productId) {
        button.classList.toggle('active');
      }
    }
  }

  buttons.forEach(deselectButtons(productId));
};

// deselect last product inventory buttons, create new inventory selection and reset inventory match obj
export const createNewInventorySelection = (params) => {
  unselectPreviousProduct(params.productId);
  const newInventorySelection = { [params.name]: params.value };
  const resetInventoryMatch = { productId: null, match: false, count: 0 };

  return {
    newInventorySelection,
    resetInventoryMatch,
  };
};

// add an item to already selected set of inventory items
export const addInventorySelection = (params) => {
  const { productId } = params;
  const { products } = params;
  const { inventoryMatch } = params;
  const { inventorySelection } = params;
  const newInventorySelection = { ...inventorySelection, [params.name]: params.value }
  const inventoryItem = values(newInventorySelection).length >= 3 ? findProductInventoryCount({newInventorySelection, productId, products, inventoryMatch}) : inventoryMatch;
  
  return {
    newInventorySelection,
    inventoryItem,
  };
};
