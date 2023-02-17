import React, { useState } from 'react'

import UserInput from '../UserInput/UserInput';
// import "./Input.css";
import Card from '../Card/Card';
import ListMessages from './ListMessages';

const provideInput=[
    {
      id:"1",
      message:"Please Enter a message!",
      
      
    },
    {
        id:"2",
        message:"You can pin or delete the entered message"
    }
  ]

export default function Input() {
    // const [deleteInput, setDeleteInput] = useState("");
    // const [messages,setMessages]=useState(userInputData)

 
    // const userInputChangeHandler = (event) => {
    //     setUserInput(event.target.value);
    // }

    // const userInputSubmitHandler = (event) => {
    //     event.preventDefault();
    //     const userInputData = {
    //         message: userInput
    //     }
    // }

    const [messages,setMessages]=useState(provideInput)

    const addMessagesHandler=(message)=>{
        setMessages(prevMessages=>{
            return [...prevMessages,message]
            // const newMessages=[...prevMessages];
            // newMessages.unshift({message:message,id:Math.random().toString()})
        })
    }

    const deleteItemHandler=inputId=>{
        setMessages(prevMessages=>{
            const newMessages=prevMessages.filter(message=>message.id !==inputId);
            return newMessages.reverse();
        })
    }


    return (
        <div>
            <Card className='structure'>
                <ListMessages lists={messages}  onDeleteItem={deleteItemHandler}
                />
                <UserInput onAddMessages={addMessagesHandler}/>
            </Card>
        </div>
    );
}