import { Route } from "wouter";
import StarterElement from "./components/StarterElement";
import TeaInfoElement from "./components/TeaInfoElement";
import ScrollToTop from "./components/ScrollToTop";
import TeaList from "./components/TeaList";

function App() {
  return (
    <div className="my-14 flex flex-col items-center">
      <ScrollToTop />
      <div className="bg-brown min-h-80 w-7xl content-center rounded-md">
        <Route path="/" component={StarterElement} />

        <Route path="/tea/:id">
          {(params) => <TeaInfoElement id={params.id} />}
        </Route>
      </div>

      <button className="btn mx-auto">Discover a New Tea</button>

      <TeaList />
    </div>
  );
}

export default App;
