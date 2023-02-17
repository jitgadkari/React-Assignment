import React from 'react'
import "./ListInputsItem.css"
// import Feature from './Feature';
export default function ListInputsItem(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <div>
      <div className='features'>
        <div className='featurebuttons'>
          <button className='pinbutton' >Pin</button>
          <button className='deletebutton' onClick={deleteHandler}>X</button>
        </div>
      </div>
      <p className='outputtext'><span className='text' >{props.message} </span></p>
    </div>
  )
}
