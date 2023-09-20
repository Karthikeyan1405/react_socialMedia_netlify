import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const EditPost = () => {
  const{posts,editTitle,setEditTitle,editBody,setEditBody,handleEdit} = useContext(DataContext)
    const {id} = useParams()
    const post = posts.find(post => (post.id).toString()===id);
useEffect(() =>{
    if(post){
        setEditTitle(post.title);
        setEditBody(post.body)
    }
},[post,setEditTitle,setEditBody])
  return (
    
    <main className='NewPost'>
        { editTitle && 
          <>
            <h2>Edit Post</h2>
            <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="postTitle">Title :</label>
                <input
                   id='postTitle' 
                   type="text" 
                   required
                   value={editTitle}
                   onChange = {(e)=>setEditTitle(e.target.value)} 
                />
                <label htmlFor="postBody">Post :</label>
                <textarea
                     id='postBody'
                     required
                     value={editBody}
                     onChange={(e)=>setEditBody(e.target.value)}
                /> 
                <button
                   type='sumbit'
                   onClick={()=>handleEdit(post.id)}> Sumbit
                </button>    

            </form>
          </>
        }
        {!editTitle && 
             <>
                <h2>Page Not Found 1</h2>
                <p>Well,that's disapponiting.</p>
                <p>Visit Our HomePage</p>       
             </>
        }
    </main>

  )
}

export default EditPost