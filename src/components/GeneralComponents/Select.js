import React, { Fragment } from 'react'
import './Select.css'
import { Form } from 'react-bootstrap'
import { countryList } from '../Data/Countries'
export default function Select(props) {

    const options = countryList.map(country => <option key={country} value={country}>{country}</option>)
  return (
    <Fragment>
        <Form.Label className='select-label'>Select Your Country</Form.Label>
        <select ref={props.currentRef} onClick={props.onClick}>
            {options}
        </select>
    </Fragment>
  )
}
