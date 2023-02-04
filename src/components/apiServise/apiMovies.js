import axios from 'axios';

export const getMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=6de1479941bef67a0c224787b78603f1`
  );
  return data;
};

export default getMovies;

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/movie/550',
// });

// async function getMovies() {
//   const { response } = await instance.get('/', {
//     params: {
//       //   search: query,
//       //   _page: 1,
//       api_key: '6de1479941bef67a0c224787b78603f1',
//     },
//   });
//   return response;
// }

// https://api.themoviedb.org/3/movie/550?api_key=6de1479941bef67a0c224787b78603f1

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

//   params: {
//       search: query,
//       _page: 1,
//       api_key: '6de1479941bef67a0c224787b78603f1',
//     },
