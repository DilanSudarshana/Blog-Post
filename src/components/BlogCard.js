import React from "react";

const BlogCard = (props) => {
  const { id, title, description } = props.blog;
  return (
    <div className="container rounded border shadow p-3 mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="item">
            <div className="row">
              <div className="col">
                <div className="header"><h2>{title}</h2></div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <div className="description">{description}</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <i
                  className="trash alternate outline icon"
                  style={{ color: "red", padding: "5px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
