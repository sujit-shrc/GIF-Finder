
import { useState, useEffect } from "react";
import GifCard from "./GifCard";
const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = "https://api.giphy.com/v1/gifs/search"
const MainPage = () => {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("welcome");
  const [loading, setLoading] = useState(true)

  const handleChange = async (e) => {
    setQuery(e.target.value);
  };

  const URL = `${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=5&offset=0&rating=g&lang=en`;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGIF(URL);
  };

  useEffect(() => {
    fetchGIF(URL);
  },[URL]);


  const fetchGIF = async (url) => {
    try {
      const res = await fetch(url);
      const out = await res.json();
      const data = out.data
      setLoading(false)
      console.log(data)
      if (data.length > 0) {
        setGifs(data)
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
      <div className="gif-container">
        <GifCard data = {gifs} loading = {loading} />
      </div>
    </div>
  );
};

export default MainPage;
