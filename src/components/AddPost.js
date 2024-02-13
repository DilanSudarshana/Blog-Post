import React from "react";

const AddPost = () => {
  return (
    <div className="ui main">
      <h2>Add Post</h2>
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" />
        </div>

        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            style={{height: '100px'}}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};
export default AddPost;
