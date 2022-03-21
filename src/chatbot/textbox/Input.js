import React from 'react'




export default function Input({ onSendclick, onSendclick2, onInputchange}) {
  return (
        <div className='inputContainer'>
          <input placeholder='Message' onChange={(e)=>{onInputchange(e)}}/>
          <button onClick={()=>{
            onSendclick2();
            onSendclick();
            }}>Go</button>
        </div>
  )
}
