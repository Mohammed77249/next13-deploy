import React, { Suspense } from "react";
import PostDetails from "@/app/componentes/Postdetails";

const PostDetailsPage = async ({ params }) => {
  const postId = params.postId;

 

  return (
    <div style={{padding:'20px'}}>
      <h1>deteials post</h1>
      <Suspense>

      <PostDetails postId={postId} />
      </Suspense>
     

    </div>
  );
};

export default PostDetailsPage;
