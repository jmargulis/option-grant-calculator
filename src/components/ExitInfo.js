import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import {isNonNegativeNumber, printNumberWithCommas} from "../utils/utils";
import { updateExit } from '../actions/exitActions';
import { fetchUI } from '../actions/uiActions';
import { fetchGrants } from '../actions/grantActions';
import store from '../store';

class ExitInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exitDate: props.exit.exitDate,
      exitValue: props.exit.exitValue
    }
  }

  componentWillMount() {
    this.props.fetchUI();
    this.props.fetchGrants();
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
    let grants = this.props.grants;
    let percentage = 0;
    let initialValue = 0;
    let minDate = new Date();
    if(grants && grants.length)
    {
      grants.map(grant => {
        percentage += 100 * grant.sharesGranted / grant.totalShares;
        initialValue += grant.sharesGranted * grant.strikePrice;
        minDate = minDate < grant.strikeDate ? minDate : grant.strikeDate;
      });
    }
    let myValue = this.state.exitValue * percentage / 100 - initialValue;

    // TODO: use more sophisticated number of years
    let numYears = Math.max(this.state.exitDate.getFullYear() - minDate.getFullYear(), 1);
    let annualizedValue = myValue / numYears;

    return (
      <div className={(!this.state.exitDate || !this.state.exitValue) ? 'invisible' : ''}>
        <p>
          Your take-home based on <strong className="exit-percentage">
          {percentage.toFixed(4)}%
          </strong> ownership is:
        </p>
        <h3 className="exit-value">
          ${printNumberWithCommas(myValue)}
        </h3>
        <p>
          Your annualized compensation is <strong className="exit-value-annualized">
          ${printNumberWithCommas(annualizedValue)}
        </strong> over <span className="exit-years">{numYears}</span> years.
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className={'row' + (this.props.ui ? '' : ' d-none')}>
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
  updateExit: PropTypes.func.isRequired,
  fetchUI: PropTypes.func.isRequired,
  fetchGrants: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  exitDate: state.exitDate,
  exitValue: state.exitValue,
  ui: state.ui,
  grants: state.grants
});

export default connect(mapStateToProps, { updateExit, fetchUI, fetchGrants })(ExitInfo);
