import { useState } from 'react'
import { Comment } from './components/Comment'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { SideBar } from './components/SideBar'

function App() {

  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
