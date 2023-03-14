import "./ExpEduStyles.css"
import React from 'react'
import Educard from "./EduCard"
import EducationData from "./EducationData"
import ExpCard from "./ExpCard"
import ExperienceData from "./ExperienceData"

const Education = () => {
  return (
    <div className="exp-edu">
      <div className="grids-ee">
        <div className="edu">
        <h1 className="eehead">EDUCATION</h1>
          <div className="edu-container">
            {EducationData.map((val,ind)=>{
                    return(
                        <Educard 
                        key={ind}
                        degree={val.degree}
                        college={val.college}
                        year={val.year}
                        />
                    )
                })}
          </div>
        </div>
      <div className="exp">
      <h1 className="eehead">EXPERIENCE</h1>
      <div className="exp-container">
        {ExperienceData.map((val,ind)=>{
                return(
                    <ExpCard 
                    key={ind}
                    position={val.position}
                    company={val.company}
                    duration={val.duration}
                    />
                )
            })}
      </div>
      </div>
      </div>
    </div>
    )
}

export default Education