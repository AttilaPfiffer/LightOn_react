import React from 'react'
import "./Lampa.css"
import { KattContext } from '../contexts/KattContext'
import { useContext } from 'react'

function Lampa(props) {
  const {katt} = useContext(KattContext)
    function handleKatt() {
        
        katt(props.index)
    }
  return (
    <div className = {`lampa ${props.jel ? "fel" : "le"}`} onClick = {() => handleKatt()}>{props.jel}</div>
  )
}

export default Lampa