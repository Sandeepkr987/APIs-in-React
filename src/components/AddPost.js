import React from 'react'

function AddPost({addPost}) {
    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(title, body);
        setTitle('');
        setBody('');
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
         <div className='form--heading'>Add-New-Post</div>
         <div className='form_container'>
         <label className='form--label' htmlFor='title'>Title:</label>
        <input   name="title"  type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
         </div>
        <div className='form_container'>
        <label className='form--label' htmlFor='body'>Body:</label>
        <input  name="body" type='text' value={body} onChange={(e) => setBody(e.target.value)}/>
        </div>
        <button className='button-30' type="submit">Add Posts</button>
    </form>
  )
}

export default AddPost
