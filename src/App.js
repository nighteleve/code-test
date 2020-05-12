import React from "react";
import HelloMessage from "./HelloMessage";
import Timer from "./Timer";
import TodoApp from "./TodoApp";
export default function App() {
  return (
    <div className="App">
      <HelloMessage name="Taylor" />
      <Timer />
      <TodoApp />
    </div>
  );
}
