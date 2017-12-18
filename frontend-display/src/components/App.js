import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import axios from 'axios';
import { Grid, Row, Col} from 'react-bootstrap';
import { GET_PRODUCTS_URL } from '../constants';
import { createNewInventorySelection, addInventorySelection } from '../helpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      inventorySelection: {},
      inventoryMatch: { productId: null, match: false, count: 0 },
      lastProductSelected: null,
    };
    this.onInventoryChange = this.onInventoryChange.bind(this);
  }

  componentDidMount() {
    axios.get(GET_PRODUCTS_URL)
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onInventoryChange(e) {
    e.preventDefault();
    !e.target.classList.contains('active') ? e.target.classList.toggle('active') : null;
    const productId = e.target.dataset.productId;
    const name = e.target.firstChild.name;
    const value = e.target.firstChild.value;
    const { products } = this.state;
    const { inventoryMatch } = this.state;
    const { inventorySelection } = this.state;
    
    if (productId !== this.state.lastProductSelected) {
      const obj = createNewInventorySelection({ name, value, productId });
      this.setState({ inventorySelection: obj.newInventorySelection, inventoryMatch: obj.resetInventoryMatch, lastProductSelected: productId });
    } else {
      const obj = addInventorySelection({ inventorySelection, name, value, productId, products, inventoryMatch });
      this.setState({ inventorySelection: obj.newInventorySelection, inventoryMatch: obj.inventoryItem, lastProductSelected: productId });
    }
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md={2} smHidden={true} xsHidden={true} className="hidden-sm">
            <Navigation />
          </Col>
          <Col md={10}>
            <Main
              products={this.state.products}
              inventoryMatch={this.state.inventoryMatch}
              onInventoryChange={this.onInventoryChange}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
