import React, {useState} from 'react'
export const useExp = (func) => {
     const [enteredValue, setEnteredValue] = useState('')
     const valueHandler = e => {
         setEnteredValue(e.target.value)
     }
     const isValid = func(enteredValue)

     return{
         enteredValue, valueHandler, isValid
     }
}