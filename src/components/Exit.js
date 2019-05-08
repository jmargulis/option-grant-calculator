import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExitInfo from './ExitInfo';
import { fetchExit } from '../actions/exitActions';
import { fetchUI } from '../actions/uiActions';

class Exit extends React.Component {
  componentWillMount() {
    this.props.fetchExit();
    this.props.fetchUI();
  }

  render() {
    if(this.props.ui)
    {
      return (
        <ExitInfo exit={this.props.exit}/>
      );
    }
    return (<div/>);
  }
}

Exit.propTypes = {
  fetchExit: PropTypes.func.isRequired,
  fetchUI: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  exit: state.exit,
  ui: state.ui
});

export default connect(mapStateToProps, { fetchExit, fetchUI })(Exit);
