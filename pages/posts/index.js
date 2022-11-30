import React, { useEffect, useState } from "react";

const PostHome = () => {
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };
     useEffect(() => {
          getData()
     }, [])
  return (
    <div>
      PostHome
      {posts.map((el) => (
        <h1 key={el.id}>{el.title}</h1>
      ))}
    </div>
  );
};

export default PostHome;
