import { useReducer } from 'react'

// reducerが受け取るactionの型を定義
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// 現在の状態とactionにもとづいて新しい状態を返す関数
const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return currentCount + 1
    case 'DECREMENT':
      return currentCount - 1
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default:
      return currentCount
  }
}

type CounterProps = {
  initialValue: number
}

export const Counter = (props: CounterProps) => {
  const { initialValue } = props
  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
      <h2>Counter3</h2>
      <p>Count: {count}</p>
      {/* dispatch関数にactionを渡して状態を更新 */}
      <button onClick={() => dispatch('DECREMENT')}>-</button>
      <button onClick={() => dispatch('INCREMENT')}>+</button>
      <button onClick={() => dispatch('DOUBLE')}>x2</button>
      <button onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default { Counter }
