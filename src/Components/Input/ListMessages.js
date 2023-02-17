import React from 'react'
import ListInputsItem from './ListInputsItem'



export default function ListMessages(props) {
    // if(props.lists.length===0){
    //     return <h2 >No messages written yet</h2>
    // }

    return (
        <ul >
            {props.lists.map((input) => (<ListInputsItem key={input.id} id={input.id} message={input.message} onDelete={props.onDeleteItem} />
            ))}

        </ul>
    )
}
