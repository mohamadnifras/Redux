import React from 'react'
import { addSum, setInputValues} from './SumSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Number1() {
const dispatch = useDispatch()
const inputValue = useSelector((state)=> state.sum.inputValue)
const navigate = useNavigate()
const handleNext =()=>{
 dispatch( addSum())
 navigate('/num2')
}
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e)=>dispatch(setInputValues(Number(e.target.value)))}/>
        <button onClick={handleNext}>next</button>
    </div>
  )
}

export default Number1