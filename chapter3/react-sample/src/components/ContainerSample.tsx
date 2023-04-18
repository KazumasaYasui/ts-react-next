import React from 'react';

// Containerコンポーネントに渡すpropsの型を定義
type ContainerProps = {
  title: string
  children: React.ReactNode
}

// Containerコンポーネントは、子要素を赤背景色で囲むコンポーネント
const Container = (props: ContainerProps) => {
const { title, children } = props
  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示する */}
      <div>{children}</div>
    </div>
  )
}

const Parent = () => {
  return (
    // Containerを使用する際に、他のコンポーネントを子要素として渡す
    <Container title="Hello">
      <p>ここの部分が背景色で囲まれます。</p>
    </Container>
  )
}

export default Parent
