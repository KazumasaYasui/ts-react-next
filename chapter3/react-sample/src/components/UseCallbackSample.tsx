import React, { memo, useState, useCallback } from 'react'

type ButtonProps = {
  onClick: () => void
}

// 通常の関数コンポーネント
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props
  console.log('DecrementButtonが再描画されました')
  return <button onClick={onClick}>Decrement</button>
}

// メモ化した関数コンポーネント
const IncrementButton = memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('IncrementButtonが再描画されました')
  return <button onClick={onClick}>Increment</button>
})

// メモ化した関数コンポーネント
const DoubleButton = memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('DoubleButtonが再描画されました')
  return <button onClick={onClick}>Double</button>
})

export const Parent = () => {
  const [count, setCount] = useState(0)
  const decrement = () => setCount((c) => c - 1)
  const increment = () => setCount((c) => c + 1)
  // useCallbackを使って関数をメモ化
  const double = useCallback(() => setCount((c) => c * 2), [])

  return (
    <div>
      <h2>Counter5</h2>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  )
}
