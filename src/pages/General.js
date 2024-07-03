import NewsList from "../components/NewsList";

export function General() {
  return (
    <div className="App">
      <NewsList type={'country=us&category='} category={'general'}/>
    </div>
  );
}