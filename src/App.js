import './App.css';
import React, { useState } from "react";
import {QRCodeSVG} from 'qrcode.react';



function App() {

  const [myInput, setMyInput]=useState(""); 

  const [valueToManage, setValueToManage]=useState(""); 


  function handleClick(){
    setValueToManage(myInput);
  }

  return (
    <div className="container">

      <div className="card" style={{"width": "18rem"}}>
      {valueToManage !=="" &&
       <QRCodeSVG value={valueToManage} size="300"/>
      }
      
        <div className="card-body">
          <h5 className="card-title">QRcode generator</h5>
          
          <p className="card-text">Enter your code or your url to generate a QRCode.</p>
          <input className='' type="text" id='inputValue' value={myInput} onChange={(e)=>setMyInput(e.target.value)}></input>
              <button onClick={handleClick} className="btn btn-primary stretched-link"> Afficher QR code</button>
        </div>
      </div>
    </div>
  );
}

export default App;
