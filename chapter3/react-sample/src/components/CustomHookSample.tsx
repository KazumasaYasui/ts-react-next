import React, { useCallback, useDebugValue, useState } from 'react'

const useInput = () => {
  const [state, setState] = useState('')
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, [])

  // デバッグ用に値を出力する
  useDebugValue(`Input: ${state}`)

  return [state, onChange] as const
}

export const CustomHookSample = () => {
  const [text1, onChangeText1] = useInput()
  const [text2, onChangeText2] = useInput()

  return (
    <div>
      <h2>CustomHookSample</h2>
      <div>
        <input type="text" value={text1} onChange={onChangeText1} />
        <p>Input1: {text1}</p>
      </div>
      <div>
        <input type="text" value={text2} onChange={onChangeText2} />
        <p>Input2: {text2}</p>
      </div>
    </div>
  )
}
