import "./App.css";
import React from "react";
import Header from "./Header";
import AddPost from "./AddPost";
import PostList from "./PostList";

function App() {
  const blogs = [
    {
      id: "1",
      title: "Hellow",
      des: "description",
    },
    {
      id: "2",
      title: "UOM",
      des: "ddddddddddddddddddddddddd",
    },
    {
      id: "3",
      title: "CSE",
      des: "WWWWWWWWWW",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center flex-column p-5  gap-5">
      <Header />
      <AddPost />
      <PostList blogs={blogs} />
    </div>
  );
}

export default App;
