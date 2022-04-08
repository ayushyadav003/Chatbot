import React from "react";  
import './App.css'
import Chatbot from "./chatbot/ChatWindow/Chatbot";
import Flip from 'react-reveal/Flip';

function App() {
  return (
    <div className="App">
      <Flip>
        <Chatbot />
      </Flip>  
    </div>
  );
}

export default App;



