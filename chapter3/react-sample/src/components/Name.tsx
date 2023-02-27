import React from 'react'

// 名前を入力するためのテキストボックスを返すコンポーネントです。
const Name = () => {
  // input要素のonChangeイベントに対するコールバック関数
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div style={{ padding: '16px', backgroundColor: 'gray' }}>
      <label htmlFor="name">名前</label>
      <input id="name" className="input-name" type="text" onChange={onChange} />
    </div>
  )
}

// 外部からNameコンポーネントを読み込めるようにエクスポートする
export default Name
