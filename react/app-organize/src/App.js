import { useContext } from "react";
import Nav from "./components/Nav";
import Route from "./routes/Route";
import AppContext from "./context/AppContext";

function App() {
  const {state, dispatch} = useContext(AppContext);
  const {nav} = state;
  const {selectedMenu, menus} = nav;
  return (
    <div >
      <Nav items={menus} dispatch={dispatch}/>
      <Route selected={selectedMenu.key}/>
    </div>
  );
}

export default App;
