import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function TotalSum() {
    const totalSum = useSelector((state)=> state.sum.totalSum)
    const navigate = useNavigate()
  return (
    <div>
        <h1>TotalSum: {totalSum}</h1>
        <br />
        <button onClick={()=>navigate('/')}>Go Back</button>

        
    </div>
  )
}

export default TotalSum