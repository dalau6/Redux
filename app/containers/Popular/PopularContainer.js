import React from 'react'
import PropTypes from 'prop-types'
import { Popular } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as popularActionCreators from 'redux/modules/popular'

class PopularContainer extends React.Component {
  
  handleFetch = () => {
    this.props.fetchingSuccess()
  }

  render() {
    return (
      <Popular 
        fetching={this.fetching}
        onFetch={this.handleFetch}
        isFetching={this.props.isFetching} />
    )
  }
}

PopularContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  fetching: PropTypes.func.isRequired,
  fetchingSuccess: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(popularActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularContainer)