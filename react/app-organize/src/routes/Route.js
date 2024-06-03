import Home from "../pages/Home";
import PageA from "../pages/PageA";
import PageB from "../pages/PageB";
import About from "../pages/About";

const Route = ({ selected }) => {
	return (
	  <div>
      {selected === 'home' && <Home />}
      {selected === 'pagea' && <PageA />}
      {selected === 'pageb' && <PageB />}
      {selected === 'about' && <About />}
    </div>
	)
}
export default Route;