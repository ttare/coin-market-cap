import React from 'react';
import {connect} from 'react-redux';
import {Button, Glyphicon, Table} from 'react-bootstrap';
import CryptoCurrencyRow from '../../components/CryptoCurrencyRow';
import CryptoCurrencyDetails from '../../components/CryptoCurrencyDetails';
import Loader from '../../components/Loader';

import CurrencyActions from "../../actions";

class Currencies extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.fetchData();
  }


  fetchData = async () => {
    this.setState({loading: true});
    await this.props.dispatch(CurrencyActions.list(this.props.currency));
    this.setState({loading: false});
  };

  fetchDetails = async (cryptocurrency) => {
    this.setState({loading: true});
    await this.props.dispatch(CurrencyActions.details(cryptocurrency.id, this.props.currency));
    this.setState({loading: false});
  };

  toggleModal = () => this.props.dispatch(CurrencyActions.details());

  render() {
    const {loading} = this.state;
    const {currency, list, selected} = this.props;
    return (
      <div>
        {loading && <Loader/>}

        <CryptoCurrencyDetails
          show={!!selected}
          currency={currency}
          cryptocurrency={selected}
          toggleModal={this.toggleModal}
          fetchDetails={this.fetchDetails}
        />

        <h1>
          Cryptocurrenies
          <Button bsStyle="link" className="pull-right" onClick={this.fetchData}>
            <Glyphicon glyph="refresh"/>
          </Button>
        </h1>
        <Table hover>
          <thead>
          <tr>
            <th>Rank</th>
            <th>Name / Symbol</th>
            <th>Price ({this.props.currency})</th>
            <th>24 hour change</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {list.map(item =>
            <CryptoCurrencyRow
              item={item}
              currency={currency}
              onClick={this.fetchDetails}
              key={item.name}
            />
          )}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.app.currency,
  selected: state.app.selected,
  list: state.app.list
});

export default connect(mapStateToProps)(Currencies);
