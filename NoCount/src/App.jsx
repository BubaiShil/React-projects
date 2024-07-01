import { useState } from "react";
import "./style.css"

function App() {
 
  let [countNum,setcount]=useState(5)



  function addNum(){
    if(countNum<30){
    countNum = countNum +1
    setcount(countNum)
    }
    console.log(countNum);
  }

  function removeNum() {
    if (countNum>0) {
      setcount(countNum-1)
    }
    console.log(countNum);
  }


  return (
    <>
      <h1>Count: {countNum}</h1>
      <button onClick={addNum}>ADD</button>
      <button onClick={removeNum} disabled={countNum === 0}>REMOVE</button>
    </>
  )
}

export default App
