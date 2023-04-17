// 無名関数でコンポーネントを定義し、Textという変数に代入する
// Textコンポーネントは親から content という props を受け取る
const Text = (props: { content: string }) => {
  // props から content という値を取り出す
  const { content } = props
  // props で渡された content を表示する
  return <p className="text">{content}</p>
}

// 同様に定義したコンポーネントを Message という変数に代入する
const Message = (props: {}) => {
  const content1 = 'This is a parent component.'
  const content2 = 'Message uses Text component.'

  return (
    <div>
      {/* content というキーでコンポーネントにデータを渡す */}
      <Text content={content1} />
      <Text content={content2} />
    </div>
  )
}

// Message コンポーネントをエクスポートする
export default Message
