import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "AMit"
const reactElement = React.createElement(
  "a",
  {href: "https://google.com", target: "_blank"}, "Click me",
  anotherUser
)

createRoot(document.getElementById("root")).render(
  reactElement
  // anotherElement
  // MyApp()
  // <MyApp />
  // <App/>
);
