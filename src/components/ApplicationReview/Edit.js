import React, {useState} from 'react'
import './Edit.css'
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editStateActions } from '../../Store/EditStateSlice';
import Loader from '../GeneralComponents/Loader';

export default function Edit(props) {
 const history = useHistory()
 const dispatch = useDispatch()
 const [showLoader, setShowLoader] = useState(false)
  const onEdit = e => {
    setShowLoader(true)
    setTimeout(() => {
        setShowLoader(false)
        dispatch(editStateActions.changeToEdit())
        history.push(props.route)
    }, 2000)
   
  }
  
  return (
    <div className='edit' data-toggle="tool-tip" data-placement="left" title="edit" onClick={onEdit}>
        <AiFillEdit />
        {showLoader && <Loader />}
    </div>
  )
}
