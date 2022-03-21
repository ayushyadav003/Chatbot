import React from 'react'


function Messages({ incoming, sent, message }) {
  return (
       <div  className='Chatbox'>
       {
        incoming && ( 
          message && <div className='incomingChat'>
            {message}  
        </div>
       )}
        {
         sent &&(
        message && <div className='sentChat'>
            {message}
        </div>
         )}
       </div>
  )
}

export default Messages