import "./ChatFormStyles.css"

import React from 'react'

const ChatForm = () => {
  return (
    <div className="chatform">
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Description</label>
            <textarea rows="6" placeholder="Type Your Message"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default ChatForm