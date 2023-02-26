// Helloはクリックをするとアラートを出すテキストを返すコンポーネントです。

const Hello = () => {
  // クリック時に呼ばれる関数
  const onClick = () => {
    // アラートを出す
    alert('hello')
  }
  const text = 'Hello, React'

  return (
    <div onClick={onClick}>
      {text}
    </div>
  )
}

// 外部からHelloコンポーネントを読み込めるようにエクスポートする
export default Hello
