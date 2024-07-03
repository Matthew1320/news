import NewsList from "../components/NewsList";

export function Health() {
  return (
    <div className="App">
      <NewsList type={'country=us&category='} category={'health'}/>
    </div>
  );
}