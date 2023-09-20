import { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {
  const {handleSumbit,postTitle,setPostTitle,postBody,setPostBody} = useContext(DataContext)
  return (
    <main className='NewPost'>
        
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSumbit}>
              <label htmlFor="postTitle">Title :</label>
              <input
                   id='postTitle' 
                   type="text" 
                   placeholder='Post_Title'
                   required
                   value={postTitle}
                   onChange={(e)=>setPostTitle(e.target.value)}
              />
              <label htmlFor="postBody">Post Body :</label>
              <textarea 
                    id='postBody'
                    required
                    value={postBody}
                    onChange={(e) =>setPostBody(e.target.value)}
              />
              <button type='sumbit'>Sumbit</button>

        </form>

        
    </main>
  )
}

export default NewPost