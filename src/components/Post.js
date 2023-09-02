import React from 'react'

function Post({deletePost, id, title, body}) {
    
  return (
    <div className='post'>
    <h2 className='post--title'>{title}</h2>
    <p className='post--body'>{body}</p>
    <button className="button-30" onClick={() => deletePost(id)}>Delete</button>
    </div>
  )
}

export default Post
