import React, {PropTypes} from 'react'
import {convertTemp} from '../helpers/utils'
import {getDate} from '../helpers/utils'
import DayItem from './DayItem'

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35,
    border:'1px solid red',
    cursor:'pointer'
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function ForecastUI ({city,forecast}) {
  return (
    <div>
      <h1 style={styles.header}>{city}</h1>
      <div style={styles.container}>
        {forecast.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem}  handleClick={handleClick.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
}

function Forecast ({isLoading,city,forecastData,handleClick}) 
{
  console.log({city,forecastData,handleClick})
  return isLoading === true
    ? <div> Adatlekérés </div>
    : <ForecastUI
              city={city}
              forecast={forecastData}
              handleClick={handleClick} />
  
}

export default Forecast
