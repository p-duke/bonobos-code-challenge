import React, { Component } from 'react';
import { Nav, NavItem, Collapse, Glyphicon } from 'react-bootstrap';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
    }
  }

  render() {
    return (
      <div className='sidebar'>
        <Nav bsStyle="pills" stacked  >
          <NavItem className="nav__items" onClick={() => this.setState({ open: !this.state.open })}>Bottoms  <Glyphicon glyph={this.state.open ? "chevron-up" : "chevron-down"} /></NavItem>
          <Collapse className="sidebar__list" in={this.state.open} transitionAppear={true} >
            <div>
              <NavItem className="sidebar__list__item nav__items" href="#washed-chinos">Washed Chinos</NavItem>
              <NavItem className="sidebar__list__item nav__items" href="#jetsetter-jeans">Jetsetter Jeans</NavItem>
              <NavItem className="sidebar__list__item nav__items" href="#travel-jeans">Travel Jeans</NavItem>
              <NavItem className="sidebar__list__item nav__items" href="#fireside-flannels">Fireside Flannels</NavItem>
            </div>
          </Collapse>
        </Nav>
      </div>
    );
  }
};

export default Navigation;
