import React, {PropTypes} from 'react'

function Button ({onSubmitCity,children}) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={onSubmitCity}>
        {children}
    </button>
  )
}

function InputField ({onUpdateCity,city}) {
  return (
    <input
      className='form-control'
      onChange={onUpdateCity}
      placeholder='Püspökladány'
      type='text'
      value={city} />
  )
}

function getStyles ({direction}) {
  return {
    justifyContent: 'center',
    alignItems: 'center',
    margin:'0 auto',
    flexDirection: direction || 'column',
  }
}

function GetCity (props) {
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
          Add ide az időjárást!
      </Button>
    </div>
  )
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default GetCity
