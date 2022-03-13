import React from 'react'
import './Loader.css'
import { MutatingDots } from 'react-loader-spinner'
import Modal from '../UI/Modal/Modal'
import './Loader.css'
export default function Loader() {
  return (
    <Modal>
        <div className='loaderDiv'>
        <MutatingDots
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
    ></MutatingDots>
    </div>
    </Modal>
  )
}
