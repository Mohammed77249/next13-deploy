import React from "react";


const PostDetails = async ({ postId }) => {
  
  await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve();
    },2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  

  return (
    <div style={{padding:'20px'}}>
      <h1>deteials post</h1>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "10px",
          margin: "20px",
          color: "black",
        }}
      >
        <h1> {post.title} </h1>
        <hr/>
        <p>{post.body}</p>
       
      </div>
      
    </div>
  );
};

export default PostDetails;
