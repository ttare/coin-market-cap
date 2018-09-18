import React from 'react';
import {connect} from 'react-redux';
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import CurrencyHelper from "../../utils/helpers/currencyHelper";
import CurrencyActions from "../../actions";


class Settings extends React.Component {
  constructor() {
    super();

    this.currencies = CurrencyHelper.getAvailableCurrencies();
  }

  handleChange = (currency) => {
    this.props.dispatch(CurrencyActions.changeCurrency(currency))
  };

  render() {
    const {currency} = this.props;
    return (
      <div>
        <div style={{marginBottom: 5}}>Choose default currency</div>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" defaultValue={currency} onChange={this.handleChange}>
            {this.currencies.map(item => (<ToggleButton value={item} key={item}>{item}</ToggleButton>))}
          </ToggleButtonGroup>
        </ButtonToolbar>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.app.currency
});

export default connect(mapStateToProps)(Settings);
