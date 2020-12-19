import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'
import Bands from './Bands';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteInfo={this.props.deleteInfo} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteInfo: id => dispatch({ type: 'DELETE_BAND',id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)