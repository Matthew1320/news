import { useState } from "react";
import Search from "../components/Search";
import KeywordSearch from "../components/KeywordSearch";
import NewsList from "../components/NewsList";

export function HomePage() {
  const [choice, setChoice] = useState("")
  const [query, setQuery] = useState("")
  
  return (
    <div className="App">
      <h1>Welcome to the Mews</h1>   
      <Search setChoice={setChoice} setQuery={setQuery}/>
      <KeywordSearch setChoice={setChoice} setQuery={setQuery} />
      <div>
        { choice 
            ? <NewsList type={'sources='} category={choice} />
            : <h1>{choice}</h1>
        }
        { query 
            ? <NewsList type={'q='} category={query} />
            : <h1>{query}</h1>
        }
      </div>
    </div>
  );
}