import React from "react";

const BlogCard = ({ title, description, deleteHandler, index }) => {
  return (
    <div className="d-flex rounded bg-white bg-gradient mb-3 align-items-center p-4" style={{ borderRadius: "20px" }}>
      <div className="flex-grow-1">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <div className="d-flex align-items-center">
        <button onClick={() => deleteHandler(index)} type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
