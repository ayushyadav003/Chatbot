import React from 'react'
import Roll from 'react-reveal/Roll';


function Messages({ incoming, sent, message }) {
  return (
       <div  className='Chatbox'>
       {
        incoming && ( 
          message && 
        <div className='leftcontainer'>
          <div className='incomingChat'>
            <span style={{padding:"0 5px 0 0"}}>&#129302;</span>
              {message}  
          </div>
        </div>
       )}
        {
         sent &&(
        message && 
        <Roll right>
        <div className='rightcontainer'>
          <div className='sentChat'>
              {message}
          </div>
        </div>
        </Roll>
         )}
       </div>
  )
}

export default Messages