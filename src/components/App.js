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
    <div className="container">
      <div className="mt-5 rounded border shadow p-3">
        <Header />
      </div>
      <div className="d-flex justify-content-center mt-5 border shadow p-5">
        <AddPost />
      </div>
      <div className="container rounded border shadow p-3 mt-5">
        <PostList blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
