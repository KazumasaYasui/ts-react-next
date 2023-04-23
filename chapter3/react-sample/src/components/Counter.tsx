import { useState } from 'react'

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props
  const [count, setCount] = useState(initialValue || 0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <div>
        <h2>Counter1</h2>
        <button onClick={decrement}>-</button>
        <span>Count: {count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <h2>Counter2</h2>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      </div>
    </>
  )
}

export default Counter
