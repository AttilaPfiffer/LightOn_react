import React from 'react'
import "./Lampa.css"

function Lampa(props) {
    function katt() {
        
        props.katt(props.index)
    }
  return (
    <div className = {`lampa ${props.jel ? "fel" : "le"}`} onClick = {() => katt()}>{props.jel}</div>
  )
}

export default Lampa