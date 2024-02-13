import React from "react";
import BlogCard from "./BlogCard";

const PostList = (props) => {
  const renderPostList = props.blogs.map((blog) => {
    return <BlogCard key={blog.id} blog={blog} />;
  });

  return <div className="ui celled list">{renderPostList}</div>;
};

export default PostList;
