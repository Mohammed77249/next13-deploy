import React from "react";

export const metadata = {
    title: 'Articals Page',
   
  }

 export default function  ({ children })  {
   
  return (
    <div>
      <h1>Articals</h1>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "blue",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
      <h1>Articals</h1>
    </div>
  );
}


