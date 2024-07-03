import NewsList from "../components/NewsList";

export function Entertainment() {
  return (
    <div className="App">
      <NewsList type={'country=us&category='} category={'entertainment'}/>
    </div>
  );
}