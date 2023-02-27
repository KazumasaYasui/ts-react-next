// Helloはクリックをするとアラートを出すテキストを返すコンポーネントです。

const Hello = () => {
  // クリック時に呼ばれる関数
  const onClick = () => {
    alert('hello')
  }
  // 変更時に呼ばれる関数
  const onChange = (str: string) => {
    alert(str)
  }
  const text = 'Hello, React'

  return (
    <>
      <div onClick={onClick}>
        {text}
      </div>
      <div>
        <input type='text' onChange={(e) => onChange(e.target.value)} />
      </div>
    </>
  )
}

// 外部からHelloコンポーネントを読み込めるようにエクスポートする
export default Hello
