import React  from 'react'
import DayItem from './DayItem'
import {convertTemp} from '../helpers/utils'

const styles = {
  descriptionContainer: {
    fontSize: 18,
    fontWeight: 100,
    maxWidth: 600,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function Detail ({city,weather}) {
  return (
    <div style={styles.container}>
      <DayItem day={weather} />
      <div style={styles.descriptionContainer}>
        <p>{city}</p>
        <p>{weather.weather[0].description}</p>
        <p>minimum hőmérséklet: {convertTemp(weather.temp.min)} Celsius fok</p>
        <p>maximum hőmérséklet: {convertTemp(weather.temp.max)} Celsius fok</p>
        <p>relatív páratartalom: {weather.humidity} %</p>
      </div>
    </div>
  )
}

export default Detail
