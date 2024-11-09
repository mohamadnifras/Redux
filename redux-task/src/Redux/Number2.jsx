import React from 'react'
import { addSum, setInputValues} from './SumSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Number2() {
 const dispatch =  useDispatch()
 const navigate = useNavigate()
const inputValue = useSelector((state)=> state.sum.inputValue)
const handleSum = ()=>{
  dispatch(addSum())
  navigate('/sum')

}
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e)=>dispatch(setInputValues(Number(e.target.value)))}/>
        <button onClick={handleSum}>sum</button>
    </div>
  )
}

export default Number2