import React from 'react'
import { Form } from 'react-bootstrap'
import './Input.css'

export default function Input(props) {
    
  return (
    <div className='input-field'>
        <Form.Label>{props.label}</Form.Label>
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} onBlur={props.onBlur} className={props.className} value={props.value}></input>
        <Form.Text>{props.text}</Form.Text>
    </div>
  )
}
