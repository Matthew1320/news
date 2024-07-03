import NewsList from "../components/NewsList";

export function Sports() {
  return (
    <div className="App">
      <NewsList type={'country=us&category='} category={'sports'}/>
    </div>
  );
}
