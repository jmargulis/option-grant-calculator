import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import {isNonNegativeNumber, printNumberWithCommas} from "../utils/utils";
import { updateExit } from '../actions/exitActions';
import store from '../store';

class ExitInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exitDate: props.exit.exitDate,
      exitValue: props.exit.exitValue
    }
  }

  onChangeExitDate(value) {
    this.setState({exitDate: value});
    this.updateData();
  }

  handleExitValue(e) {
    e.preventDefault();
    if (isNonNegativeNumber(e.target.value) || e.target.value === '') {
      this.setState({exitValue: e.target.value});
    }
  }

  updateData() {
    this.props.updateExit({
      exitDate: this.state.exitDate,
      exitValue: this.state.exitValue
    });
  }

  renderSummary() {
    // determine values to display based on grants and exit data
    let grants = store.getState().grants;
    let percentage = 0;
    let initialValue = 0;
    let minDate = new Date();
    grants.map(grant => {
      percentage += 100 * grant.sharesGranted / grant.totalShares;
      initialValue += grant.sharesGranted * grant.strikePrice;
      minDate = minDate < grant.strikeDate ? minDate : grant.strikeDate;
    });
    let myValue = this.state.exitValue * percentage / 100 - initialValue;
    let annualizedValue = myValue / Math.max(this.state.exitDate.getFullYear() - minDate.getFullYear(), 1);

    return (
      <div>
        <p>Your take-home based on <strong>{percentage.toFixed(4)}%</strong> ownership is:</p>
        <h3>${printNumberWithCommas(myValue)}</h3>
        <p>Your annualized compensation is <strong>${printNumberWithCommas(annualizedValue)}</strong>.</p>
      </div>
    );
  }

  render() {
    return (
      <div className='row'>
        <div className='col-12 col-sm-6 col-md-4'>
          <div className='grant-info rounded'>
            <fieldset className="form-group">
              <legend>Exit Info</legend>
              <div className="form-group">
                <label>Exit Date</label>
                <div className="d-block">
                  <DatePicker
                    onChange={this.onChangeExitDate.bind(this)}
                    value={this.state.exitDate}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Exit Valuation</label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                  </div>
                  <input className="form-control strike-price" type="text"
                         onChange={this.handleExitValue.bind(this)}
                         onBlur={this.updateData.bind(this)}
                         value={this.state.exitValue}
                  />
                </div>
              </div>
              {this.renderSummary()}
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

ExitInfo.propTypes = {
  updateExit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  exitDate: state.exitDate,
  exitValue: state.exitValue
});

export default connect(mapStateToProps, { updateExit })(ExitInfo);
