import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'

const Home = () => {
  const {searchResults,fetchError,isLoading} = useContext(DataContext)
  return (

    <main className="Home">
      
      {isLoading && <p className='statusMsg'>Loading Posts</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color:"Red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults}/> : <p className='statusMsg'>No posts to Display</p>)}

    </main>
      
  )
}

export default Home