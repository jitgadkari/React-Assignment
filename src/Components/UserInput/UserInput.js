import React,{useState} from 'react'
import "./UserInput.css"
export default function UserInput(props) {


    const [userInput, setUserInput] = useState("");

    const userInputChangeHandler = (event) => {
        setUserInput(event.target.value);
        console.log(event.target.value)
    }

    const userInputSubmitHandler = (event) => {
        event.preventDefault();
        const userInputData = {
            message: userInput
            ,id:Math.random().toString()
        }
        props.onAddMessages(userInputData);
        setUserInput("");
    }

    return (
        <form className='textfield' onSubmit={userInputSubmitHandler}>
            <div className='inputfield'>
                <input type="text" id="text" className='in' placeholder='Message' value={userInput} onChange={userInputChangeHandler} />
                <button type="submit" className='button'>Send</button>
                <h1></h1>
            </div>
        </form>
    )
}
