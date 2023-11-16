import { BrowserRouter, Route, Routes } from "react-router-dom";
import Celebrity from './Pages/Celebrity';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TV from './Pages/TV';
import NotFound from './Pages/NotFound';
import Header from "./Components/Header";
import MovieDetail from "./Pages/MovieDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/celebrity" element={<Celebrity />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/movies/:title" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;