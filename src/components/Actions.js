import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGrant } from '../actions/grantActions';

class Actions extends React.Component {

  addGrant(e)
  {
    e.preventDefault();
    this.props.addGrant();
  }

  render() {
    return (
      <div>
        <br/>
        <button className="btn btn-outline-primary" onClick={this.addGrant.bind(this)}>Add Another Grant</button>
        <button className="btn btn-primary">Calculate Exit Value &gt;</button>
      </div>
    );
  }
}

Actions.propTypes = {
  addGrant: PropTypes.func.isRequired
};

export default connect(null, { addGrant })(Actions);
