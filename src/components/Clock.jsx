import { useEffect, useState } from 'react';

function Clock() {
  let tme = new Date();
  console.log(tme);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {

    },1000);
    return () => clearInterval(interval);
  })
  return (
    <div className="clock">
      <h1>Digital Clock</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
