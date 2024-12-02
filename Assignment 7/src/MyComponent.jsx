
import { useEffect, useState } from "react"
function MyComponent(){
const[count, setCount] =useState(0)
const [isRunning, setIsRunning ] =useState(false) ;
 
useEffect(()=>{
let timer;
if(isRunning){
    timer = setInterval(() => {
        setCount((c=>c+1))
    }, 1000);
} else{
    clearInterval(timer)
}

return () => clearInterval(timer);
}, [isRunning]);

const toggleCounter = () => {
    setIsRunning((c) => !c);
  };



return(
<div className="box">
<p>count: {count}</p>
<button onClick={toggleCounter}>
        {isRunning ? 'Stop' : 'Start'}
      </button>

</div>

);

}
export default MyComponent;