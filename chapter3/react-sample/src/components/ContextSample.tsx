import React from 'react'

// Titleを渡すためのContextを作成
const TitleContext = React.createContext('')

const Title = () => {
  // TitleContextのConsumerを使用して、TitleContextの値を取得する
  return (
    <TitleContext.Consumer>
      {/* Consumer直下に関数を置き、Contextの値を参照する */}
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

const Page = () => {
  const title = 'React Book'

  // TitleContextのProviderを使用して、TitleContextの値を渡す
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page
