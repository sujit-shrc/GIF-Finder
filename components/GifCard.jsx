import { useState } from "react";
import { PacmanLoader } from "react-spinners";


const GifCard = ({data, loading}) => {
  const [copied, setcopied] = useState("")
  console.log(loading)
  const copyURL = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      { loading ? <div className="loader" ><PacmanLoader color="#36d7b7" /></div>
      : data.map((currGif, key) => {
        const {id, images } = currGif;
        return (
          <div className="gif-cards" key={id}>
            <img src={images.original.url} alt="gif-not-found" />
            <button
              className="copy-btn"
              onClick={() => {
                copyURL(images.original.url);
                setcopied(key)
              }}
            >
              {copied === key ? " Copied " : " Copy Link "}
            </button>
          </div>
        );
      })} 
    </>
  );
};

export default GifCard;
