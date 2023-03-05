import { useState } from 'react';



function Calculator(){
  const [input,setInput] = useState('');
  const [result, setResult] = useState('');

  function  handleInput(value){
    setInput(input + value);
  }

  return (
    <div className="button">
      <div>
      <input type="text" value={input} id="inputC" readOnly/>
      <input type="text" value={result} id="inputC" readOnly/>
      <br></br>
      </div>
      <div>
      <button onClick={()=>handleInput('7')}>7</button>
      <button onClick={()=>handleInput('8')}>8</button>
      <button onClick={()=>handleInput('9')}>9</button>
      <button onClick={()=>handleInput('-')}>-</button>
      <button onClick={()=>setInput(input.slice(0,input.length-1))}>b</button>
      <br></br>
      </div>
      <div>
      <button onClick={()=>handleInput('4')}>4</button>
      <button onClick={()=>handleInput('5')}>5</button>
      <button onClick={()=>handleInput('6')}>6</button>
      <button onClick={()=>handleInput('/')}>/</button>
      <button onClick={()=>setResult(eval(input))}>=</button>
      <br></br>
      </div>
      <div>
      <button onClick={()=>handleInput('1')}>1</button>
      <button onClick={()=>handleInput('2')}>2</button>
      <button onClick={()=>handleInput('3')}>3</button>
      <button onClick={()=>handleInput('*')}>*</button>
      <button onClick={()=>handleInput('+')}>+</button>
      <br></br>
      </div>
      <div>
      <button onClick={()=>handleInput('00')}>00</button>
      <button onClick={()=>handleInput('0')}>0</button>
      <button onClick={()=>handleInput('.')}>.</button>
      <button onClick={()=>setInput("")}>Clear</button>
      </div>

    </div>
  );
}
export default Calculator;
