import React from "react";

const BlogCard = (props) => {
  const { id, title, des } = props.blog; // Destructuring props.blog to extract id, title, and description
  return (
    <div className="item" key={id}>
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">{des}</div>{" "}
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", padding: "5px", marginTop: "5px" }}
      />
    </div>
  );
};

export default BlogCard;
