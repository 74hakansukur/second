import React, {Component} from 'react'
import Forecast from '../comps/Forecast'
import {getForecast} from '../helpers/api'

class ForecastContainer extends Component {
  contextTypes: {
    router: React.PropTypes.object.isRequired
  }
  constructor () {
    super()
    this.state = {
      isLoading: true,
      forecastData: {},
      weather: {}
    }
  }
  handleClick (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather
      }
    })
  }
  componentDidMount () {
    this.makeRequest(this.props.routeParams.city)
  }
  componentWillReceiveProps (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  }
  makeRequest (city) {
    getForecast(city)
      .then( (forecastData)=> {
        this.setState({
          isLoading: false,
          forecastData
        })
      })
  }
  render () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} 
	handleClick={this.handleClick} />
    )
  }
}

export default ForecastContainer
