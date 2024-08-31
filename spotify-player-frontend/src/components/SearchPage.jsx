import React, { useContext, useState } from 'react';
import axios from 'axios';
import { PlayerContext } from '../context/PlayerContext';
import Player from './Player';

const SearchPage = ({name,image,desc,id}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const {playWithId} = useContext(PlayerContext)

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value) {
            try {
                const response = await axios.get(`http://localhost:4000/api/song/search?query=${e.target.value}`);
                setResults(response.data);
            } catch (error) {
                console.error("Error fetching search results", error);
            }
        } else {
            setResults([]);
        }
    };

    return (
        <>
        <div className="p-4">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for a song..."
                className="w-full p-2 text-black rounded"
            />
            <div className="mt-4 grid grid-cols-1 gap-4">
                {results.length > 0 ? (
                    <div className="grid grid-cols-5 gap-4" >
                        {results.map((song) => (
                            <div
                                key={song._id}
                                className="flex flex-col items-center p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
                                onClick={()=>{
                                    console.log(song)
                                    // playWithSong(song)
                                }
                                }
                            >
                                <img className="rounded w-full h-32 object-cover" src={song.image} alt="" />
                                <p className="font-bold mt-2 mb-1 text-white">
                                    {song.name}
                                </p>
                                <p className="text-slate-200 text-sm">{song.desc}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-white">No results found</p>
                )}
            </div>
        </div>
        <Player/>
        </>
    );
};

export default SearchPage;
