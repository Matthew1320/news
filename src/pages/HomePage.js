import { useState } from "react";
import Search from "../components/Search";
import NewsList from "../components/NewsList";

export function HomePage() {
  const [choice, setChoice] = useState("")
  
  return (
    <div className="App">
      <h1>Welcome to the Mews</h1>   
      <Search setChoice={setChoice}/>
      <div>
        { choice 
            ? <NewsList type={'sources='} category={choice} />
            : <h1>{choice}</h1>
        }
      </div>
    </div>
  );
}