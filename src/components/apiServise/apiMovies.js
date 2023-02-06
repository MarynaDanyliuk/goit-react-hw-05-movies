import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getMovies = async () => {
  const { data } = await instance.get(
    `/trending/movie/day?api_key=6de1479941bef67a0c224787b78603f1`
  );
  return data;
};

export const getSingleMovie = async id => {
  const { data } = await instance.get(
    `/movie/${id}?api_key=6de1479941bef67a0c224787b78603f1`
  );
  return data;
};

export const searchMovies = async query => {
  const { data } = await instance.get(`/search/movie/`, {
    params: {
      query,
      api_key: '6de1479941bef67a0c224787b78603f1',
    },
  });
  return data;
};

export const getCastMovie = async id => {
  const { data } = await instance.get(
    `/movie/${id}/credits?api_key=6de1479941bef67a0c224787b78603f1`
  );
  return data;
};

// /movie/{movie_id}

// export const getMovies = async () => {
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/trending/all/day?api_key=6de1479941bef67a0c224787b78603f1`
//   );
//   return data;
// };

// export default getMovies;

// export default getSingleMovie;

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/movie/550',
// });

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

//   params: {
//       search: query,
//       _page: 1,
//       api_key: '6de1479941bef67a0c224787b78603f1',
//     },
