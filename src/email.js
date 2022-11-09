import { useState } from 'react'

function Email ({email, index, toggleRead, toggleStar, setShowEmail}){


    return (
       
    <li
    key={index}
    className={`email ${email.read ? 'read' : 'unread'}`}>
    <div className="select">
      <input
        className="select-checkbox"
        type="checkbox"
        checked={email.read}
        onChange={() => toggleRead(email)}
      />
    </div>
    <div className="star">
      <input
        className="star-checkbox"
        type="checkbox"
        checked={email.starred}
        onChange={() => toggleStar(email)}
      />
    </div>
    <div className="sender">{email.sender}</div>
    <div onClick={() => setShowEmail(email)} className="title">{email.title}</div>
  </li>
    )
}

export default Email