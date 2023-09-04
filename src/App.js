import './App.css';
import React, {useState, useEffect} from 'react'

import Post from './components/Post';
import AddPost from './components/AddPost';


function App() {
  const [posts, setPosts] = useState([])

  const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=13')
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch((err) => console.log(err))
  }
  useEffect(() => {
    getPost()
  }, [])

  const addPost = (title, body) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2)
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then((res) => res.json())
    .then((data) => {
      setPosts((prevPost) => [data, ...prevPost])
    
    })
  }
const deletePost = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE"
  })
  .then((res) => {
    if(res.status === 200) {
      setPosts(posts.filter((post) => {
        return post.id !== id
      }))
    }
  })
  
}

  return (
    <div className="App">
     <h1 className='heading-1'>CONSUMING APIs</h1>
     <AddPost addPost={addPost}/>
     <section>
      <div className='heading-2'>Posts</div>
        {posts.map((post) => 
          <Post 
            key={post.id} 
            id={post.id}
            title={post.title} 
            body={post.body} 
            deletePost={deletePost}
          />
        )}
      </section>
     
    </div>
  );
}

export default App;


