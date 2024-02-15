import React, { useState } from "react";

const AddPost = (props) => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (blog.title === "" || blog.description === "") {
      alert("Fill in all inputs!");
      return;
    }
    props.addPostHandler(blog);
    console.log(blog);
    setBlog({ title: "", description: "" });
  };

  return (
    <div className="ui main">
      <h2>Add Post</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            style={{ height: "100px" }}
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
          />
        </div>
        <button type="submit" className="ui button blue">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddPost;
