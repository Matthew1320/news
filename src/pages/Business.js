import NewsList from "../components/NewsList";

export function Business() {
  return (
    <div className="App">
      <NewsList type={'country=us&category='} category={'business'}/>
    </div>
  );
}