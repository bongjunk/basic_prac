import axios from 'axios';

// 새로운 속성과 값을 입력할땐 &기호를 넣어줘야함
function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((res) => {
      console.log(res);
      const h1El = document.querySelector('h1');
      const imgEl = document.querySelector('img');
      h1El.textContent = res.data.Search[0].Title;
      imgEl.src = res.data.Search[0].Poster;
    });
}
fetchMovies(); 