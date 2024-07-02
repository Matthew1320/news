import { useState } from "react";
import Search from "../components/Search";

export function HomePage() {
  const [choice, setChoice] = useState("")
  return (
    <div className="App">
      <h1>Welcome to the Mews</h1>   
      <Search setChoice={setChoice}/>
      <h1>{choice}</h1>
    </div>
  );
}