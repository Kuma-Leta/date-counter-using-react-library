import { useState } from "react";


function App() {
  return (
    <div className="App">
     <Header/>
     <DateCount/>
    </div>
  );
}
function Header()
{
  return (
    <header>
      <h3>
        Do you want to know today or day after someday or day before someday ?
      </h3>
      <h3>Relax here is the solution..........</h3>
    </header>
  );
}
function DateCount(){
  const [count,setCount]=useState(0)
  const [step,setStep]=useState(1)
  const date = new Date("november 8 2023 ");
  date.setDate(date.getDate()+count)
  function handleReset(){
    setCount(0)
    setStep(1)
  }

  return(
    <div className="dateCount">
      <div className="step">
        <button className="btn" onClick={()=>setStep(step-1)}>minus</button>
        <span>how many days {step}</span>
        <button className="btn" onClick={()=>setStep(step+1)}>add</button>
      </div>
      <div className="count">
        <button className="btn" onClick={()=>setCount(count-step)}>minus by 1</button>
        <span>count {count}</span>
        <button className="btn" onClick={()=>setCount(count+step)}>add by 1</button>
      </div>
      <div>
       {count===0 && <h3 >today is {date.toDateString()}</h3 >}
       {count>0 && <h3 >{count} days after today is {date.toDateString()}</h3 >}
       {count <0 && <h3 >{count} days after today was {date.toDateString()}</h3 >}
      </div>
      <button className="btn" onClick={()=>handleReset()}>reset</button>
    </div>
  );
}

export default App;
