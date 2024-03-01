import React from "react";

export default function Home() {
  return (
    <div>
      <div className="snap-center">
        <div
          className="h-[80vh] bg-[url('../public/1st_bg.jpeg')]"
          style={{
            boxShadow: "currentColor 0 0 0 10000px inset",
            color: "rgba(36, 142, 255, 0.163)",
          }}
          id="fixed_background_container"
        ></div>
      </div>
    </div>
  );
}
