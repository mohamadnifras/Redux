import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,incrementByAmount } from "../Redux/Counter/CountSlice";
function Counter() {
const count = useSelector((state)=> state.count.value)
 const dispatch = useDispatch()
 const handleIncrement = ()=>{
  dispatch(increment())
 }
 const handleDecrement =()=>{
  dispatch(decrement())
 }
 const handleByAmount =()=>{
  dispatch(incrementByAmount(5));
 }
    return (
      <div className="counter">
        <h2>Counter</h2>
        <h3>The count is -{count}</h3>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
        <button onClick={handleByAmount}>Increment by 5</button>
      </div>
    );
  }
  
  export default Counter;