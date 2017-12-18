import { 
  findProductInventoryCount,
  unselectPreviousProduct, 
  createNewInventorySelection, 
  addInventorySelection 
} from '../helpers';

let inventory = [{ product_id: 1, waist: 32, length: 30, style: 'chino', count: 75 }];
let products = [{ description: "Super awesome!", id: 1, image: "cool-jeans-bro.jpg", inventories: inventory, name: "washed chinos" }];
let newInventorySelection = { waist: "32", length: "30", style: "chino" };
let inventoryMatch = { productId: null, match: false, count: 0 };
let name = "waist";
let value = "32";
let matchingInventory = { productId: "1", match: true, count: 75 };
let inventorySelection = {};
let inventoryItem = { productId: null, match: false, count: 0 };
let paramsOne = { productId: "1", products, newInventorySelection, inventoryMatch };
let paramsTwo = { name, value, productId: "1" };
let paramsThree = { products, productId: "1", inventoryMatch, inventorySelection, name, value };

describe('findProductInventoryCount', () => {
  it('should find the matching inventory for a product', () => {
    expect(findProductInventoryCount(paramsOne)).toEqual(matchingInventory);
  });
});

newInventorySelection = { waist: "32" };
const resetInventoryMatch = { productId: null, match: false, count: 0 };

describe('createNewInventorySelection', () => {
  it('should create a new inventory selection object', () => {
    expect(createNewInventorySelection(paramsTwo)).toEqual({newInventorySelection, resetInventoryMatch});
  })
});

newInventorySelection = { waist: "32" };
const expected = { inventoryItem, newInventorySelection };

describe('addInventorySelection', () => {
  it('should add an inventory selection', () => {
    expect(addInventorySelection(paramsThree)).toEqual(expected);
  })
});

