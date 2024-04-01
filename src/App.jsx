import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  // let counter = 15;


  return (
   <>
   <h1>Faizan Hussain</h1>
   <h2>Counter Value: {count}</h2>

   <button
   onClick={()=>{
    if(count === 20){
      setCount(count = 0)}
      else{
        count++;
        setCount(count);
      }
    }}
   >Add: {count}</button>
   <br />
   <br />
   <button
   onClick={() => {
    if(count === 0){
      setCount(count = 20)
    }else{
      count--;
    setCount(count)
    }
    }}
   >remove: {count}</button>
   <br />
   <br />
   <button
   onClick={
    ()=>{
      count = 0;
      setCount(count);
    }
   }
   >set to Zero: {count}</button>
   </>
  )
}

export default App
