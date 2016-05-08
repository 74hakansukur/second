import React, {PropTypes} from 'react'
import GetCityContainer from '../containers/GetCityContainer'

const styles = {
  container: {
    backgroundImage: "url('myfirstapp/imgs/dark-textile-background.jpg')",
    justifyContent: 'center',
    alignItems: 'center',
    margin:'0 auto',
    width: '50%',
    textAlign:"center",
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}

function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Város neve</h1>
      <GetCityContainer />
    </div>
  )
}

export default Home
