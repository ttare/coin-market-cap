import PropTypes from 'prop-types'
import React from 'react';
import {Glyphicon} from 'react-bootstrap'

import './style.css';

const CryptoCurrencyRow = ({item, currency, onClick}) => (
  <tr className="cryptocurrency-row" onClick={() => onClick(item)}>
    <td>{item.rank}</td>
    <td>{item.name} ({item.symbol})</td>
    <td>{item.quotes[currency].price}</td>
    <td>{item.quotes[currency].percent_change_24h}</td>
    <td>
      <a role="button">
        <Glyphicon glyph="info-sign"/>
        Details
      </a>
    </td>
  </tr>
);

CryptoCurrencyRow.propTypes = {
  currency: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CryptoCurrencyRow;

