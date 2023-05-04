import React, { useMemo, useState } from 'react'

export const UseMemoSample = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    setItems((prevItems) => [...prevItems, text])
    setText('')
  }
  // items内の文字数を合計する
  const countItemsCharacters = (items: string[], number: number) => {
    console.log(`countTotalItemCharacters${number}: 再描画されました`)
    return items.reduce((sub, item) => sub + item.length, 0)
  }
  // 再描画のたびにitems.reduceを実行して結果を得る
  const numberOfCharacters1 = countItemsCharacters(items, 1)
  // itemsが変更されるタイミングでitems.reduceを実行して結果を得る
  const numberOfCharacters2 = useMemo(() => {
    return countItemsCharacters(items, 2)
  }, [items])

  return (
    <div>
      <h2>UseMemoSample</h2>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  )
}
