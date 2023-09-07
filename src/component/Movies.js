import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [hovered, setHovered] = useState([]);
  // pagination menthods
  const onNext = () => {
    setPageNum(pageNum + 1);
  };

  const onPrev = () => {
    if (pageNum !== 1) {
      setPageNum(pageNum - 1);
    }
  };
  // watchlist methods
  const addToWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    localStorage.setItem("watchListArray", JSON.stringify(newWatchList));
  };
  const removeFromWatchList = (movie) => {
    const filterdWatchList = watchList.filter((ele) => {
      return ele.id !== movie.id;
    });
    setWatchList(filterdWatchList);
    localStorage.setItem("watchListArray", JSON.stringify(filterdWatchList));
  };

  const showBtn = (id) => {
    setHovered(id);
  };
  const hideBtn = () => {
    setHovered("");
  };
  useEffect(() => {
    (function () {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=805da563f8ceec37655a72e4f97fc6ad&page=${pageNum}`
        )
        .then((res) => setMovies(res.data.results));
    })();
  }, [pageNum]);

  useEffect(() => {
    if (localStorage.getItem("watchListArray")) {
      let moviesfromLocalStorage = JSON.parse(
        localStorage.getItem("watchListArray")
      );
      setWatchList(moviesfromLocalStorage);
    }
  }, []);
  return (
    <div>
      <div className="text-2xl font-bold">Trending Movies</div>
      <div className="flex flex-wrap ">
        {movies.map((data) => {
          return (
            <div
              onMouseOver={() => showBtn(data.id)}
              onMouseLeave={() => hideBtn()}
              key={data.id}
              className="flex flex-wrap w-[160px] h-[33vh] bg-center bg-no-repeat bg-cover rounded-xl ml-7 mb-5 hover:scale-110 "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
              }}
            >
              <div className="w-full flow-root rounded-t-xl">
                <div className="float-left  text-white font-bold mb-auto p-3">
                  ⭐{data.vote_average}
                </div>
                {watchList.find(mov => mov.id===data.id) === undefined ? (
                  <div
                    className=" mr-1 mt-1 float-right text-2xl cursor-pointer "
                    style={{
                      display: hovered === data.id ? "block" : "none",
                    }}
                  >
                    <div onClick={() => addToWatchList(data)}>💘</div>
                  </div>
                ) : (
                  <div
                    className="mr-1 mt-1 float-right text-2xl cursor-pointer"
                    style={{
                      display: hovered === data.id ? "block" : "none",
                    }}
                  >
                    <div onClick={() => removeFromWatchList(data)}>💔</div>
                  </div>
                )}
              </div>

              <div className="w-full bg-gray-300 bg-opacity-40 rounded-b-xl text-white font-bold">
                {data.original_title}
              </div>
            </div>
          );
        })}
      </div>

      <Pagination pageNum={pageNum} onPrev={onPrev} onNext={onNext} />
    </div>
  );
}

export default Movies;
