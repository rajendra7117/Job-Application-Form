import React from 'react'
import './ReviewComponent.css'
import ReviewItem from './ReviewItem';
import Edit from './Edit'
import Card from '../UI/Card';

export default function ReviewComponent(props) {
    const content = props.array.map(item => <ReviewItem  item={item} key={Math.random(1000) * 100}/>)
  
  return (
    <Card>
      <div className='items'>
        <div>
      {content}
      </div>
      <div>
        <Edit route={props.route} />
      </div>
      </div>
    </Card>
  )
}
