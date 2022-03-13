import React, {useState} from 'react'
import './ApplicationReview.css'
import Container from '../UI/Container'
import { Form } from 'react-bootstrap'

import ReviewComponent from './ReviewComponent'
import Loader from '../GeneralComponents/Loader'

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useClearData } from './ClearData'


export default function ApplicationReview() {
  const [showLoader, setShowLoader] = useState(false)
  const history = useHistory()
  const emailAddress = useSelector(state => state.accountInfo.emailAddress)
  const basicDetails = useSelector(state => state.basicDetails.basicDetails)
  const skills = useSelector (state => state.skills.skillsArray)
  const experience = useSelector(state => state.experience.experience)
  const education = useSelector(state => state.education.education)
  const {clearData} = useClearData()
  const submitApplication = e => {
    e.preventDefault()
    setShowLoader(true)
    setTimeout(() => {
      setShowLoader(false)
      history.push('/completed')
      clearData()

    },2000)
  }
  
  return (
    <Container>
        <Form className='review-form' onSubmit={submitApplication}>
         <ReviewComponent array={emailAddress.dataArray} route={'/'}/>
         <ReviewComponent array={basicDetails.dataArray} route={'/basic-details'}/>
         <ReviewComponent array={skills} route={'/skills'}/>
         <ReviewComponent array={experience.dataArray} route={'/experience'}/>
         <ReviewComponent array={education.dataArray} route={'/education'}/>
         <button>Submit Application</button>
        </Form>
        {showLoader && <Loader />}
    </Container>
  )
}
