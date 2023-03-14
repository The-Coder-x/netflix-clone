// // import {
// //   configureStore,
// //   createAsyncThunk,
// //   createSlice,
// // } from "@reduxjs/toolkit";
// // import axios from "axios";
// // import { API_KEY, TMBD_BASE_URL } from "../utils/contants";

// // const initialState = {
// //   movies: [],
// //   genresLoaded: false,
// //   genres: [],
// // };

// // export const getGenres = createAsyncThunk("netflix/genres", async () => {
// //   const {
// //     data: { genres },
// //   } = await axios.get(
// //     "https://api.themoviedb.org/3/genre/movie/list?api_key=99edf199137b0b5225e073e051845de2"
// //   );
// //   return genres;

// // });

// // const createArrayFromRawData = (array, moviesArray, genres) => {
// //     console.log(array)
// //   array.forEach((movie) => {
// //     const movieGenres = [];
// //     movie.genre_ids.forEach((genre) => {
// //       const name = genres.find(({ id }) => id === genre);
// //       if (name) movieGenres.push(name.name);
// //     });
// //     if (movie.backdrop_path)
// //       moviesArray.push({
// //         id: movie.id,
// //         name: movie?.original_name ? movie.original_name : movie.original_title,
// //         image: movie.backdrop_path,
// //         genres: movieGenres.slice(0, 3),
// //       });
// //   });
// // };

// // const getRawData = async (api, genres, paging = false) => {
// //   const moviesArray = [];
// //   for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
// //     const {
// //       data: { results },
// //     } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
// //     createArrayFromRawData(results, moviesArray, genres);
// //   }
// //   return moviesArray;
// // };

// // export const fetchDataByGenre = createAsyncThunk(
// //   "netflix/genre",
// //   async ({ genre}, thunkAPI) => {
// //     const {
// //       netflix: { genres },
// //     } = thunkAPI.getState();
// //     return getRawData(
// //       `https://api.themoviedb.org/3/discover/movie?api_key=99edf199137b0b5225e073e051845de2&with_genres=${genre}`,
// //       genres
// //     );
// //   }
// // );

// // export const fetchMovies = createAsyncThunk(
// //   "netflix/trending",
// //   async (thunkAPI) => {
// //     const {
// //       netflix: { genres },
// //     } = thunkAPI.getState();
// //     const data =  getRawData(
// //       `https://api.themoviedb.org/3/trending/all/day?api_key=99edf199137b0b5225e073e051845de2`,
// //       genres,
// //       true
// //     );
// //     console.log(data);
// //   }
// // );

// // export const getUsersLikedMovies = createAsyncThunk(
// //   "netflix/getLiked",
// //   async (email) => {
// //     const {
// //       data: { movies },
// //     } = await axios.get(`http://localhost:5000/api/user/liked/${email}`);
// //     return movies;
// //   }
// // );

// // export const removeMovieFromLiked = createAsyncThunk(
// //   "netflix/deleteLiked",
// //   async ({ movieId, email }) => {
// //     const {
// //       data: { movies },
// //     } = await axios.put("http://localhost:5000/api/user/remove", {
// //       email,
// //       movieId,
// //     });
// //     return movies;
// //   }
// // );

// // const NetflixSlice = createSlice({
// //   name: "Netflix",
// //   initialState,
// //   extraReducers: (builder) => {
// //     builder.addCase(getGenres.fulfilled, (state, action) => {
// //       state.genres = action.payload;
// //       state.genresLoaded = true;
// //     });
// //     builder.addCase(fetchMovies.fulfilled, (state, action) => {
// //       state.movies = action.payload;
// //     });
// //     builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
// //       state.movies = action.payload;
// //     });
// //     builder.addCase(getUsersLikedMovies.fulfilled, (state, action) => {
// //       state.movies = action.payload;
// //     });
// //     builder.addCase(removeMovieFromLiked.fulfilled, (state, action) => {
// //       state.movies = action.payload;
// //     });
// //   },
// // });

// // export const store = configureStore({
// //   reducer: {
// //     netflix: NetflixSlice.reducer,
// //   },
// // });

// // export const { setGenres, setMovies } = NetflixSlice.actions;

// import { async } from "@firebase/util";
// import {
//   configureStore,
//   createAsyncThunk,
//   createSlice,
// } from "@reduxjs/toolkit";
// import axios from "axios";
// import { API_KEY, TMBD_BASE_URL } from "../utils/contants";

// const initialState = {
//   movies: [],
//   genresLoaded: false,
//   genres: [],
// };

// export const getGenres = createAsyncThunk("netflix/genres", async () => {
//   const {
//     data: { genres },
//   } = await axios.get(
//     `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
//   );

//   return genres;
// });
// const createArrayFromRawData = (array, moviesArray, genres) => {
//   array.forEach((movie) => {
//     const movieGenres = [];
//     movie.genre_ids.forEach((genre) => {
//       const name = genres.find(({ id }) => id === genre);
//       if (name) movieGenres.push(name.name);
//     });
//     if (movie.backdrop_path)
//       moviesArray.push({
//         id: movie.id,
//         name: movie?.original_name ? movie.original_name : movie.original_title,
//         image: movie.backdrop_path,
//         genres: movieGenres.slice(0, 3),
//       });
//   });
// };

// const getRawData = async (api, genres, paging) => {
//   const moviesArray = [];
//   for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
//     const {
//       data: { results },
//     } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
//     createArrayFromRawData(results, moviesArray, genres);
//   }
// };

// export const fetchMovies = createAsyncThunk(
//   "netflix/trending",
//   async ({ type }, thunkApi) => {
//     const {
//       netFlix: { genres },
//     } = thunkApi.getState();
//     return getRawData(
//       `${TMBD_BASE_URL}/trending/${type}/week?api_key = ${API_KEY}`,
//       genres,
//       true
//     );
//   }
// );

// const NetflixSlice = createSlice({
//   name: "Netflix",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(getGenres.fulfilled, (state, action) => {
//       state.genres = action.payload;
//       state.genresLoaded = true;
//     });
//   },
// });

// export const store = configureStore({
//   reducer: {
//     netFlix: NetflixSlice.reducer,
//   },
// });



import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from "../utils/contants";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=99edf199137b0b5225e073e051845de2");
  return genres;
});

const createArrayFromRawData = (array, moviesArray, genres) => {
    // console.log(array)
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};

const getRawData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchDataByGenre = createAsyncThunk(
  "netflix/genre",
  async ({ genre, type }, thunkAPI) => {
    const {
      netflix: { genres },
    } = thunkAPI.getState();
    return getRawData(
      `https://api.themoviedb.org/3/discover/${type}?api_key=99edf199137b0b5225e073e051845de2&with_genres=${genre}`,
      genres
    );
  }
);

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkAPI) => {
    const {
      netflix: { genres },
    } = thunkAPI.getState();
    return getRawData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
    // console.log(data)
  }
);

export const getUsersLikedMovies = createAsyncThunk(
  "netflix/getLiked",
  async (email) => {
    const {
      data: { movies },
    } = await axios.get(`http://localhost:5000/api/user/liked/${email}`);
    return movies;
  }
);

export const removeFromLikedMovies = createAsyncThunk(
  "netflix/deleteLiked",
  async ({ movieId, email }) => {
    const {
      data: { movies },
    } = await axios.put("http://localhost:5000/api/user/delete", {
      email,
      movieId,
    });
    return movies;
  }
);

const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(getUsersLikedMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(removeFromLikedMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});

// export const { setGenres, setMovies } = NetflixSlice.actions;
