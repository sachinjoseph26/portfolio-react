import "./SkillsStyles.css"

import React from 'react'

const Skills = () => {
  return (
    <div className="skills">
        <h1 className="project-heading"> SKILLS</h1>
        <div className="card-conatiner">
        <div className="card">
                <h3>-Big Data-</h3>
                <span className="bar"></span>
                <p className="btc">Expert</p>
                <p>-Hadoop-</p>
                <p>-Cloudera-</p>
                <p>-Hive-</p>
            </div>

            <div className="card">
                <h3>-Databases-</h3>
                <span className="bar"></span>
                <p className="btc">Expert</p>
                <p>-MongoDB-</p>
                <p>-SQL Server-</p>
            </div>

            <div className="card">
                <h3>-Programming-</h3>
                <span className="bar"></span>
                <p className="btc">Expert</p>
                <p>-Python-</p>
                <p>-R-</p>
                <p>-React JS-</p>
                <p>-C,C++-</p>
                <p>-HTML,CSS,JS-</p>
            </div>

            <div className="card">
                <h3>-Cloud/Analytics-</h3>
                <span className="bar"></span>
                <p className="btc">Expert</p>
                <p>-AWS-</p>
                <p>-GCP-</p>
                <p>-Power BI-</p>
            </div>

        </div>
    </div>
  )
}

export default Skills