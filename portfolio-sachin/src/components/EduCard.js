import "./ExpEduStyles.css"
import React from 'react'

const EduCard = (props) => {
  return (
    <div className='ee-card'>
        <p>{props.degree}</p>
        <p>{props.college}</p>
        <p>{props.year}</p>
    </div>
  )
}

export default EduCard