import { useRouter } from "next/router";
import React from "react";

const PostDetail = () => {
  const router = useRouter();
  const { pid } = router.query;
  return <div>PostDetail - {pid}</div>;
};

export default PostDetail;

// localhost:3000/posts/1
