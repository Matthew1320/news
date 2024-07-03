import NewsList from "../components/NewsList";

export function Science() {
  return (
    <div className="App">
      <NewsList type={'country=us&category='} category={'science'}/>
    </div>
  );
}