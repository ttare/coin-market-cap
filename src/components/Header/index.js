import PropTypes from 'prop-types'
import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Glyphicon} from 'react-bootstrap';

const Header = ({currency}) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            Coin Market Cap
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">
              Cryptocurrenies
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <Navbar.Text>
            Selected currency: <span style={{color: "#fff"}}>{currency}</span>
          </Navbar.Text>
          <li>
            <Link to="/settings">
              <Glyphicon glyph="cog" />
            </Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  currency: PropTypes.string.isRequired
};

export default Header;
