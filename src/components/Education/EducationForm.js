import React, {useState} from 'react'
import './EducationForm.css'
import Input from '../GeneralComponents/Input'
import Container from '../UI/Container'
import { Form, Alert } from 'react-bootstrap'
import { useExp } from '../Hooks/ValidationHook'
import Loader from '../GeneralComponents/Loader'
import SuccessCard from '../GeneralComponents/SuccessCard'
import { educationSliceActions } from '../../Store/EducationSlice'
import { useDispatch, useSelector } from 'react-redux'


export default function EducationForm() {
  const {enteredValue: level, valueHandler: levelHandler, isValid: isLevelValid} = useExp((level) => {return level.trim()!==''})
  const {enteredValue: stream, valueHandler: streamHandler, isValid: isStreamValid} = useExp((stream) => {return stream.trim()!==''})
  const {enteredValue: grade, valueHandler: gradeHandler, isValid: isGradeValid} = useExp((grade) => {return parseInt(grade)>0})
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const edit = useSelector(state => state.edit.editState)
 
  const submitHandler = e => {
    e.preventDefault()
    if(!isGradeValid || !isLevelValid || !isStreamValid){
      setError(true)
      return
    }
    setShowLoader(true)
    setTimeout(() => {
      setShowLoader(false)
      setShowModal(true)
      dispatch(educationSliceActions.storeEducation({dataArray:[`Highest Education: ${level}`, `Stream: ${stream}`, `CGPA/Percentage: ${grade}`]}))
    }, 2000)
  }
  const toggleModal = e => {
    setShowModal(false)
  }
  return (
    <Container>
      <Form className='education-form' onSubmit={submitHandler}>
        <Input label="Highest level of Education" type="text" placeholder="example B.Tech" onChange={levelHandler} />
        <Input label="Stream" placeholder="Examples CSE" type="text"onChange={streamHandler} />
        <Input label="CGPA/Percentage" placeholder="Example 70" type="text" onChange={gradeHandler} />
        <button className='eduction-btn'>Submit</button>
      </Form>
      {error && (<Alert variant='danger'> please check all the fields</Alert>)}
      {showLoader && <Loader />}
      {showModal && <SuccessCard route="/review" message="All Sections completed Please continue to Review your Application" toggleModal={toggleModal} />}
    </Container>
  )
}
