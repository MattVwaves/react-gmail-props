import Email from './email.js'
import { useState } from 'react'


function Emails ({filteredEmails, toggleRead, toggleStar}){

const [showEmail, setShowEmail] = useState('null')

 return  <> {showEmail !== 'null' ? 
 <>
 <p>{showEmail.title}</p>
 <button>{'back'}</button>
 </> : 
 <ul>
 {filteredEmails.map((email, index) => (
   <Email email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar} 
        showEmail={showEmail} setShowEmail={setShowEmail}/>
 ))}
</ul>} </>
}

export default Emails