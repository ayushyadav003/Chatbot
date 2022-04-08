import React,{useState} from 'react'
import Messages from '../Messages'
import './Chatbot.css'
import {data} from '../Data'
import Input from '../textbox/Input';
// import Roll from 'react-reveal/Roll';


export default function Chatbot() {

  const[userInput, setUserInput] = useState([]);
  const[sentmessage, setSentmessage] = useState(null);
  const[answer, setAnswer] = useState();
  const[chathistory, setChathistory] = useState([null]);
  const[inputvalue, setInputvalue] = useState('');

  const sug1 = "Where is my order?"
  const sug2 = "How can I track my oder?"
  const sug3 = "What's the latest offer for me?"
  const sug4 = "Did not recieved my oder yet?"


  const returnchat = () => {
   setAnswer("Not sure about that, will get back to you soon ")
  }

 const onInputchange = (e) =>{
  setUserInput(e.target.value);
  setInputvalue(e.target.value)
 }

 const onSendclick = () =>{
    setSentmessage(userInput);
    setChathistory((value)=>[...value,userInput])
    console.log(chathistory)
    console.log("1")

   let j=0;
   for(let i=0; j===0 ; i++){
    if( data[i].question === userInput ){
     
      setAnswer(data[i].answer);
      j++; 
    }
    else{
      returnchat();      
    }
   }
 }
 const onSendclick2 = () =>{
   setChathistory((value) =>[...value, answer])
 }
 const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    onSendclick2();
    onSendclick();
    onGoClick();
  }
}
const onGoClick = () =>{
  setInputvalue("");
  console.log("runn")
} 


  return (
  <div className='Container'>
        <div className='Chatwindow'>
        <Messages incoming={true} message= "how can i help you?" />
        {
         chathistory&& chathistory.map((chat,i) =>{

           return(
            <div key={i}>
              {
                i%2===0 ? <Messages sent={true} message = {chat} /> :  
                <Messages incoming={true} message = {chat} />
              }
            </div>
           );
         })
        }
        <Messages incoming={true} message= {answer} />
    </div>
    <div className='suggestions'>
      <span className='sugmessages'>Hello!!!</span>
      <span className='sugmessages'>Where is my order?</span>
      <span className='sugmessages'>Did not recieved my refund?</span><br></br>
      <span className='sugmessages'>Not able to place order?</span>
      <span className='sugmessages'>Offer for me!!</span>
      <span className='sugmessages'>How are you?</span>
    </div>
    <div>
    <Input value={inputvalue} onGoClick={onGoClick} onSendclick={onSendclick} 
    onSendclick2={onSendclick2} onInputchange={onInputchange}
      handleKeyDown={handleKeyDown} 
      />
    </div>
  </div>
  )
}



