import React from "react";

const BlogCard = (props) => {
  const { id, title, des } = props.blog;
  return (
    <div className="container rounded border shadow p-3 mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="item">
            <div className="header">{title}</div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="item">
            <div className="description">{des}</div>{" "}
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="item">
            <i
              className="trash alternate outline icon"
              style={{ color: "red", padding: "5px", marginTop: "5px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
