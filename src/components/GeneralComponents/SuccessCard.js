import React from 'react';
import './SuccessCard.css';
import Modal from '../UI/Modal/Modal';
import { useHistory } from 'react-router-dom';
export default function AccountSuccess(props) {
 const history = useHistory()
  const moveToNextStep = e => {
    props.toggleModal(false)
    history.push(props.route)
  }
  return (
    <Modal>
        <div className='container success-card'>
            
            <h3>{props.message}</h3>
            <h5>Please proceed with next steps</h5>
            <button className='btn btn-primary' onClick={moveToNextStep}>Continue</button>
            </div>
    </Modal>
  )
}
