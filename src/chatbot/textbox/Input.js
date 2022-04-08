import React from 'react'


export default function Input({ onSendclick, onSendclick2, onInputchange, handleKeyDown, value, onGoClick }) {


  return (
      <div className='inputContainer'>
        <input placeholder='Message' value={value} onChange={(e)=>{onInputchange(e)}}
          onKeyDown={handleKeyDown}/>
        <button onClick={()=>{
          onGoClick();
          onSendclick2();
          onSendclick();
          }}>&#x279f;</button>
      </div>
  )
}
