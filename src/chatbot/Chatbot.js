import React,{useState} from 'react'
import Messages from './Messages'
import './Chatbot.css'
import {data} from './Data'
import Input from './textbox/Input';


export default function Chatbot() {

  const[userInput, setUserInput] = useState([]);
  const[sentmessage, setSentmessage] = useState(null);
  const[answer, setAnswer] = useState();
  const[chathistory, setChathistory] = useState([null])


 const onInputchange = (e) =>{
  setUserInput(e.target.value);
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
     setAnswer('???')     
    }
   }
 }
 const onSendclick2 = () =>{
   setChathistory((value) =>[...value, answer])
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
    <div>
    <Input  onSendclick={onSendclick} onSendclick2={onSendclick2} onInputchange={onInputchange} />
    </div>
  </div>
  )
}
