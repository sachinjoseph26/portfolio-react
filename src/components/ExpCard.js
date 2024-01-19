import "./ExpEduStyles.css"
import React from 'react'

const ExpCard = (props) => {
  return (<div className='ee-card'>
        <p>{props.position}</p>
        <p>{props.company}</p>
        <p>{props.duration}</p>
    </div>
  )
}

export default ExpCard