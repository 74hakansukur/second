import React, {Component} from 'react'
import Detail from '../comps/Detail'

class DetailContainer extends Component {
  render () {
    console.log(this.props.location.state.weather)
    return (
      <Detail
        weather={this.props.location.state.weather}
        city={this.props.routeParams.city} />
    )
  }

}

export default DetailContainer
