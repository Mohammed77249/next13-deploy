import { Lexend_Peta } from "next/font/google";
import Todo from "../componentes/todo";

import Link from "next/link";

const PostsPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache:"no-store",
    // cache:'force-cache',
    next: {
      revalidate: 5,
    },
  });
  const posts = await response.json();
  const postjsx = posts.map((post) => {
    return (
      <Link href={`posts/${post.id}`} style={{width:'70%'}}>
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
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      {/* posts  =============== */}
      <h1>posts page</h1>

      {/* <Link href={"/articals"}>
            <button>click me to articals page</button>
            </Link>
            <h2>{posts.title}</h2> */}
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {postjsx}
      </div>

      {/* posts  =============== */}
      {/* 
            <div>
                <Todo /> 

            </div> */}
    </div>
  );
};

export default PostsPage;
