import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={`
        h-screen
        bg-gradient-to-r from-green-500 to-blue-500
      `}>Admin</h1>
    </div>
  )
}

export default Home
