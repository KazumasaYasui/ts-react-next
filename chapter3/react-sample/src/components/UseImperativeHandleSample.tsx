import React, { useImperativeHandle, useRef, useState } from 'react'

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState('')

  // useImperativeHandleを使って親のrefから参照できる値を指定
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello it's ${date.toLocaleString()} now`
      setMessage(message)
    },
  }))

  return <div>{message !== null ? <p>{message}</p> : null}</div>
})

export const Parent = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)

  const onClick = () => {
    if (childRef.current !== null) {
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <h2>useImperativeHandleSample</h2>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
    </div>
  )
}
