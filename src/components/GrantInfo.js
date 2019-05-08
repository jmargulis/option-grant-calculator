import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import {isPositiveInteger, isNonNegativeNumber, printNumberWithCommas} from "../utils/utils";
import { removeGrant, updateGrant } from '../actions/grantActions';

class GrantInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      sharesGranted: props.grant.sharesGranted,
      totalShares: props.grant.totalShares,
      strikePrice: props.grant.strikePrice,
      strikeDate: props.grant.strikeDate
    }
  }

  removeGrant() {
    this.props.removeGrant(this.state.id);
  }

  updateGrant() {
    this.props.updateGrant(this.state);
  }

  handleSharesGranted(e) {
    e.preventDefault();
    if (isPositiveInteger(e.target.value) || e.target.value === '') {
      this.setState({sharesGranted: e.target.value},
        () => this.updateGrant());
    }
  }

  handleTotalShares(e) {
    e.preventDefault();
    if (isPositiveInteger(e.target.value) || e.target.value === '') {
      this.setState({totalShares: e.target.value},
        () => this.updateGrant());
    }
  }

  handleStrikePrice(e) {
    e.preventDefault();
    if (isNonNegativeNumber(e.target.value) || e.target.value === '') {
      this.setState({strikePrice: e.target.value},
        () => this.updateGrant());
    }
  }

  isValid() {
    return this.state.sharesGranted !== '' &&
      this.state.totalShares !== '' &&
      this.state.strikePrice !== '';
  }

  onChangeStrikeDate(value) {
    this.setState({strikeDate: value},
      () => this.updateGrant());
  }

  render() {
    return (
      <div className='col-12 col-sm-6 col-md-4'>
        <div className='grant-info rounded'>
          <button
            className={"btn btn-danger btn-sm" + (this.props.canDelete ? "" : " d-none")}
            onClick={this.removeGrant.bind(this)}>Remove</button>
          <fieldset className="form-group">
            <legend>Option Grant Info</legend>
            <div className="form-group">
              <label>Number of Shares Granted</label>
              <input className="form-control shares-granted" type="text"
                     onChange={this.handleSharesGranted.bind(this)}
                     value={this.state.sharesGranted}
              />
            </div>
            <div className="form-group">
              <label>Number of Shares Total</label>
              <input className="form-control total-shares" type="text"
                     onChange={this.handleTotalShares.bind(this)}
                     value={this.state.totalShares}
              />
            </div>
            <div className="form-group">
              <label>Strike Price</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">$</div>
                </div>
                <input className="form-control strike-price" type="text"
                       onChange={this.handleStrikePrice.bind(this)}
                       value={this.state.strikePrice}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Strike Date</label>
              <div className="d-block">
                <DatePicker
                  onChange={this.onChangeStrikeDate.bind(this)}
                  value={this.state.strikeDate}
                />
              </div>
            </div>
            <p className={this.isValid.bind(this) ? '' : 'invisible'}>
              This grant is <strong className="grant-percent">
              {(100 * this.state.sharesGranted / this.state.totalShares).toFixed(4)}%
              </strong> with value of <strong className="grant-value">
              ${printNumberWithCommas(this.state.sharesGranted * this.state.strikePrice)}
              </strong> of <span className="total-value">
              ${printNumberWithCommas(this.state.totalShares * this.state.strikePrice)}
              </span> total company value.
            </p>
          </fieldset>
        </div>
      </div>
    );
  }
}

GrantInfo.propTypes = {
  removeGrant: PropTypes.func.isRequired,
  updateGrant: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sharesGranted: state.sharesGranted,
  totalShares: state.totalShares,
  strikePrice: state.strikePrice,
  strikeDate: state.strikeDate
});

export default connect(mapStateToProps, { removeGrant, updateGrant })(GrantInfo);
