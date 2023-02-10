import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
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

export async function searchMovies(value) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6de1479941bef67a0c224787b78603f1&language=en-US&query=${value}&page=1&include_adult=false`
  );
  const info = await res.json();
  return info;
}

// export const searchMovies = async query => {
//   const { data } = await instance.get(`/search/movie/`, {
//     params: {
//       query,
//       api_key: '6de1479941bef67a0c224787b78603f1',
//     },
//   });
//   return data;
// };

export const getCastMovie = async id => {
  const { data } = await instance.get(
    `/movie/${id}/credits?api_key=6de1479941bef67a0c224787b78603f1`
  );
  return data;
};

export const getReviewsMovie = async id => {
  const { data } = await instance.get(
    `/movie/${id}/reviews?api_key=6de1479941bef67a0c224787b78603f1`
  );
  return data;
};
