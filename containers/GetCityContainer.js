import React, {Component},{PropTypes} from 'react'
import GetCity from '../comps/GetCity'
import {getForecast} from '../helpers/api'

class GetCityContainer extends Component{
  getDefaultProps () {
    return {
      direction: 'column'
    }
  }
  propTypes: {
    direction: PropTypes.string
  }
  contextTypes: {
    router: React.PropTypes.object.isRequired
  }
  constructor () {
    super()
    this.state ={ 
      city: ''
    }
  }
  handleSubmitCity (e) {
    e.preventDefault()
    this.context.router.push('/forecast/' + this.state.city)
  }
  handleUpdateCity (e) {
    this.setState({
      city: e.target.value
    })
  }
  render () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
}

export default GetCityContainer
