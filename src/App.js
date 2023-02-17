// import Home from './Components/UI/Home';
import Input from './Components/Input/Input';
import './App.css';
// import Home from './Components/UI/Home';
// import React,{useState} from"react";

function App() {

  // const [homePage,setHomepage]=useState(true);

  return (
    <div>
    {/* {start?<Home buttonInput={start}/>:<Input/>} */}

      {/* <Home title="Welcome to WhatsApp" /> */}

      {/* {
        homePage?<Home/>:null
      }
    <button onClick={()=>setHomepage(!homePage)}>=</button> */}
      <Input />
    </div>
  );
}

export default App;
