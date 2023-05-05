import React, { useContext } from 'react'

type User = {
  id: number
  name: string
}

// ユーザーのContextを作成
const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
  // useContextを使ってユーザーのContextを取得
  const user = useContext(UserContext)

  return user ? <p>Hello, {user.name}</p> : null
}

const Child = () => {
  const now = new Date()

  return (
    <div>
      <p>現在時刻: {now.toLocaleString()}</p>
      <GrandChild />
    </div>
  )
}

export const Parent = () => {
  const user: User = {
    id: 1,
    name: 'Kazumasa Yasui',
  }

  return (
    // Contextに値を設定
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}
