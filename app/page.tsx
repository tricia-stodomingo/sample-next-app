import React from "react";
import { getAllPosts } from "../lib/cosmic";

export default async function Page() {
  const data = await getAllPosts();
  const home = data.find((page) => page.slug === "home");

  return (
    <div style={{ padding: "0 10%" }}>
      <div
        style={{
          backgroundImage: `url(${home.metadata.hero.url})`,
          backgroundSize: "cover",
          backgroundPositionY: "center",
          width: "100%",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "90px",
            width: "500px",
            lineHeight: "110px",
            paddingLeft: "50px",
          }}
        >
          {home.metadata.headline}
        </h1>
        <div
          style={{
            fontSize: "20px",
            color: "white",
            width: "350px",
            paddingLeft: "50px",
            lineHeight: "25px",
          }}
        >
          {home.metadata.content}
        </div>
      </div>
    </div>
  );
}
