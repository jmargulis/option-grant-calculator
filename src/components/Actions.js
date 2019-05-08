import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGrant } from '../actions/grantActions';
import { fetchUI, toggleExit } from '../actions/uiActions';
import { isGrantsValid } from "../utils/utils";
import store from '../store';

class Actions extends React.Component {

  componentWillMount() {
    this.props.fetchUI();
  }

  addGrant(e) {
    e.preventDefault();
    this.props.addGrant();
  }

  showGrants() {
    this.props.toggleExit();
  }

  showExit() {
    // only show Exit if grants is valid
    const state = store.getState();
    if(isGrantsValid(state.grants)) {
      this.props.toggleExit();
    }
    else {
      alert('Please complete your grant(s).')
    }
  }

  render() {
    if(this.props.ui)
    {
      return (
        <div>
          <button className="btn btn-primary" onClick={this.showGrants.bind(this)}>&lt; Back</button>
        </div>
      );
    }

    return (
      <div>
        <button className="btn btn-outline-primary" onClick={this.addGrant.bind(this)}>Add Another Grant</button>
        <button className="btn btn-primary" onClick={this.showExit.bind(this)}>Calculate Exit Value &gt;</button>
      </div>
    );
  }
}

Actions.propTypes = {
  fetchUI: PropTypes.func.isRequired,
  addGrant: PropTypes.func.isRequired,
  toggleExit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ui: state.ui
});

export default connect(mapStateToProps, { fetchUI, addGrant, toggleExit })(Actions);
