import React, {useState, useEffect} from 'react'

const Clock = () => {

    const [date, setDate] = useState(new Date());
  return (
    <div>
        <h1>Hello World!</h1>
        <h2>{date.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock;
