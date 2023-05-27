
import { useState, useEffect } from "react";
import GifCard from "./GifCard";
import { PacmanLoader } from "react-spinners";
const API_KEY = import.meta.env.VITE_API_KEY

const MainPage = () => {
  console.log("main page called")
  console.log(import.meta.env.VITE_API_KEY)
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("welcome");


  // state for loader 
  const [loading, setLoading] = useState(true)

  const handleChange = async (e) => {
    setQuery(e.target.value);
  };
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&offset=0&rating=g&lang=en`;
console.log(URL)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGIF(URL);
  };

  useEffect(() => {
    fetchGIF(URL);
  },[URL]);

  const fetchGIF = async (url) => {
    try {
      setLoading(true)
      const res = await fetch(url);
      const out = await res.json();
      setTimeout(() => {
        setLoading(false)
      }, 2000);
      if (out.data.length > 0) {
        setGifs(out.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="main">
      <form action="" className="search-box">
        <input type="text" name="query" onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </form>

      {
        loading ? <div className="loader"><PacmanLoader color="#36d7b7" className="loader" /></div>
        : <div className="gif-container">
            <GifCard data = {gifs} />
        </div>
      }
    </div>
  );
};

export default MainPage;
