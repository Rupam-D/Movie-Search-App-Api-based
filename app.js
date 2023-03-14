const landing_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const img_path = "https://image.tmdb.org/t/p/w1280";
const search_api = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const getMovies = async (api) => {
     const res = await fetch(api)
     const data = await res.json()
     console.log(data.results)
     showcase(data.results)

}

const showcase = (data) => {
     const moviebox = document.getElementById("movie-box")
     moviebox.innerHTML=""
     data.forEach(item => {
          const box = document.createElement("div")
          box.classList.add("box")
          box.innerHTML = `
          <img src="${img_path+item.backdrop_path}" alt="">
          <div class="overlay">
               <div class="title">
                    <h2>${item.original_title}</h2>
                    <span>${item.vote_average}</span>
               </div>
               <h3>Overview:</h3>
               <hr>
               <hr>
               <p>
                   ${item.overview}
               </p>
          </div>`

          moviebox.appendChild(box)

     });


}
const search =document.getElementById("search")
search.addEventListener("keyup",(e)=>{
     console.log(e.target.value)
     if(e.target.value !=""){
          getMovies(search_api+e.target.value)
     }
     else{
          getMovies(landing_api)
     }
})
getMovies(landing_api)