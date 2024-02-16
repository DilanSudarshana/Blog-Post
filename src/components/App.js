import React, { useEffect, useState } from "react";
import Header from "./Header";
import AddPost from "./AddPost";
import PostList from "./PostList";

function App() {
  const [blogs, setBlogs] = useState([]);
  const LOCAL_STORAGE_KEY = "blogs";

  const addPostHandler = (blog) => {
    if (!blog.title || !blog.description) {
      alert("Please fill in both title and description.");
      return;
    }
    setBlogs((prevBlogs) => [...prevBlogs, blog]);
  };

  const deleteHandler = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  useEffect(() => {
    const retrieveBlogs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setBlogs(retrieveBlogs);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(blogs));
  }, [blogs]);

  return (
    <div className="container">
      <div className="mt-5 rounded border shadow p-3">
        <Header />
      </div>
      <div className="d-flex justify-content-center mt-5 border shadow p-5">
        <AddPost addPostHandler={addPostHandler} />
      </div>
      <div className="container rounded border shadow p-3 mt-5">
        <PostList deleteHandler={deleteHandler} blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
