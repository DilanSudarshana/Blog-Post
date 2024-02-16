import React from "react";
import BlogCard from "./BlogCard";

const PostList = ({ blogs = [], deleteHandler = () => {} }) => {
  return (
    <div className="overflow-auto p-4 rounded">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          index={index}
          title={blog.title}
          description={blog.description}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};

export default PostList;
