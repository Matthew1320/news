import NewsList from "../components/NewsList";

export function Technology() {
  return (
    <div className="App">
      <NewsList type={'country=us&category='} category={'technology'}/>
    </div>
  );
}