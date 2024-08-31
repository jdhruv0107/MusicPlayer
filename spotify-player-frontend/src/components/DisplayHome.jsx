import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AlbumItems from "./AlbumItems";
import SongItem from "./SongItem";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import axios from "axios";
import { ToastContainer } from "react-toastify"
import { handleError, handleSuccess } from "../utils";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for default styles


function DisplayHome() {
  const { songsData, albumsData } = useContext(PlayerContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(songsData);
  const { playWithId } = useContext(PlayerContext);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/song?query=${e.target.value}`
        );
        setResults(response.data);
        console.log(results);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    } else {
      setResults([]);
    }
  };

  const [loggedinUser,setLoggedInUser] = useState("")
  useEffect(()=>{
    console.log(loggedinUser)
    setLoggedInUser(localStorage.getItem('loggedInUser'))
    handleSuccess(`welcome ${loggedinUser}`)
  },[])
  
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for a song..."
          className="w-full p-3 text-black rounded mt-4" 
          
        />
        <div className="px-4">
          <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {albumsData.map((item, index) => (
              <AlbumItems
                key={index}
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="px-4">
          <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {results.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default DisplayHome;
