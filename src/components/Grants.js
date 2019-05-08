import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GrantInfo from './GrantInfo';
import { fetchGrants } from '../actions/grantActions';

class Grants extends React.Component {
  componentWillMount() {
    this.props.fetchGrants();
  }

  render() {
    return (
      <div className="row">
        {this.props.grants.length ?
          this.props.grants.map((grant, index) => (<GrantInfo grant={grant} canDelete={!!index} id={index} key={index}/>)) :
          <p>Add a grant below</p>}
      </div>
    );
  }
}

Grants.propTypes = {
  fetchGrants: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  grants: state.grants
});

export default connect(mapStateToProps, { fetchGrants })(Grants);
