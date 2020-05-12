import React from "react";
import HelloMessage from "./HelloMessage";
import Timer from "./Timer";
export default function App() {
  return (
    <div className="App">
      <HelloMessage name="Taylor" />
      <Timer />
    </div>
  );
}
