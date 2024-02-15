import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import AddPost from "./AddPost";
import PostList from "./PostList"; 

function App() {
  const [blogs, setBlogs] = useState([]); 

  const addPostHandler = (blog) => { // Change the parameter to accept the entire blog object
    if (!blog.title || !blog.description) { // Access title and description from the blog object
      alert("Please fill in both title and description.");
      return;
    }
    setBlogs(prevBlogs => [...prevBlogs, blog]);
    console.log(blog);
  }

  return (
    <div className="container">
      <div className="mt-5 rounded border shadow p-3">
        <Header />
      </div>
      <div className="d-flex justify-content-center mt-5 border shadow p-5">
        <AddPost addPostHandler={addPostHandler} />
      </div>
      <div className="container rounded border shadow p-3 mt-5">
        <PostList blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
