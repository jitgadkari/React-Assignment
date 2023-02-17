import React from 'react'
import "./Card.css";
export default function Card(props) {
    const classes="structure";
    return (
    <div className={classes}>{props.children}</div>
  )
}
