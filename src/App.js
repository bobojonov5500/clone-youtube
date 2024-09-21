import {
  Routes,
  Route,
  useParams,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SearchItems from "./components/Search/search";
import Channel from "./components/Videos/Channel";
import WatchVideo from "./components/Videos/watch-video";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home/:category" element={<Home />} />
          <Route path="/search/:id" element={<SearchItems />} />
          <Route path="/channel/:name" element={<Channel />} />
          <Route path="/video/:videoId" element={<WatchVideo />} />
        </Routes> 
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
