import React from 'react';
import {Row, Col, Modal, Button, Table, Glyphicon} from 'react-bootstrap';

const CryptoCurrencyDetails = ({show, cryptocurrency, currency, fetchDetails, toggleModal}) => {
  if (!show) return null;
  return (
    <Modal show>
      <Modal.Header>
        <Modal.Title>
          Cryptocurrency Details - {cryptocurrency.symbol}
          <a role="button" className="pull-right" onClick={() => fetchDetails(cryptocurrency)}>
            <Glyphicon glyph="refresh"/>
          </a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={6}>
            <Table>
              <tbody>
              <tr>
                <th>Rank</th>
                <td>{cryptocurrency.rank}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{cryptocurrency.name}</td>
              </tr>
              <tr>
                <th>Symbol</th>
                <td>{cryptocurrency.symbol}</td>
              </tr>
              <tr>
                <th>Price ({currency})</th>
                <td>{cryptocurrency.quotes[currency].price}</td>
              </tr>
              <tr>
                <th>24h volume ({currency})</th>
                <td>{cryptocurrency.quotes[currency].volume_24h}</td>
              </tr>
              <tr>
                <th>Market cap ({currency})</th>
                <td>{cryptocurrency.quotes[currency].market_cap}</td>
              </tr>

              </tbody>
            </Table>
          </Col>
          <Col xs={6}>
            <Table>
              <tbody>
              <tr>
                <th>1h change ({currency})</th>
                <td>{cryptocurrency.quotes[currency].percent_change_1h}</td>
              </tr>
              <tr>
                <th>24h change ({currency})</th>
                <td>{cryptocurrency.quotes[currency].percent_change_24h}</td>
              </tr>
              <tr>
                <th>7d change ({currency})</th>
                <td>{cryptocurrency.quotes[currency].percent_change_7d}</td>
              </tr>
              <tr>
                <th>Total supply</th>
                <td>{cryptocurrency.max_supply || 'unknown'}</td>
              </tr>
              <tr>
                <th>Available supply</th>
                <td>{cryptocurrency.total_supply || 'unknown'}</td>
              </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => toggleModal()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CryptoCurrencyDetails;
