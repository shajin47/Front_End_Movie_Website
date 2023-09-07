import React, { useEffect, useState } from "react";

function Watchlist() {
  const [movies, setWatchList] = useState([]);
  const onDelete = (id)=>{
    let newmovieslist = movies.filter(ele=>ele.id != id)
    setWatchList(newmovieslist)
    localStorage.setItem('watchListArray',newmovieslist)
  }
  useEffect(() => {
    if (localStorage.getItem("watchListArray") != null) {
      let moviesfromLocalStorage = JSON.parse(
        localStorage.getItem("watchListArray")
      );
      setWatchList(moviesfromLocalStorage);
    }
  }, []);
  return (
    <div className="overflow-hidden w-full border border-gray-200 m-5 rounded-lg shadow-xl">
      <table className="w-full ">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">Rating</div>
            </th>
            <th>
              <div className="flex">Popularity</div>
            </th>
            <th>
              <div className="flex">Genre</div>
            </th>
            <th>
              <div className="flex">Delete</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie.id} className="hover:bg-gray-50">
                <td className="flex items-center  px-6 py-4 font-normal text-gray-900 space-x-2">
                  <img
                    className="h-[10rem] w-15rem object-fill"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="img"
                  />
                  <div className=" text-sm">{movie.title}</div>
                </td>
                <td className="text-left pl-6 py-4">{movie.vote_average}</td>
                <td className="text-left pl-6 py-4">{movie.popularity}</td>
                <td className="text-left py-4">Action</td>
                <td className="text-left py-4">
                  <button onClick={()=>onDelete(movie.id)} className="border shadow-md">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Watchlist;
