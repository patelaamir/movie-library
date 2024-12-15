let movies = [
    {
        name:"Iron Man",
        poster:"https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
        rating: 9.5
    },
    {
        name:"Hulk",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3amnDZ1UiHh3FWN9KEU00B0NJjRqupinWyQ&s",
        rating:9
    },
    {
        name:"Iron Man 2",
        poster:"https://m.media-amazon.com/images/I/8171kEgHRRL._AC_UF1000,1000_QL80_.jpg",
        rating:9.5
    },
    {
        name:"Thor",
        poster:"https://dvdmedia.ign.com/dvd/image/object/113/113171/THOR_domestic_DVD_2D_SKEW.jpg",
        rating:9.5
    },
    {
        name:"Captain America The First Avenger",
        poster:"https://images-cdn.ubuy.co.in/634cff8dee61a027615ddfa2-posters-usa-marvel-captain-america-the.jpg",
        rating:9.6
    },
    {
        name:"The Avengers",
        poster:"https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1zl-__AniNk6weQ-kc2chavj_4qY8TK49hdm9Hl8ndxUmiT5fPqi8qv0Y9GnjwuV4M8&usqp=CAU",
        rating: 10
    },
    {
        name: "Iron Man 3",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bPSVeQanoLpg5rNr3Pv94lQuhPl34tIn59wIXI8u5m0VLdbhlFQWxjwlZKOxUND97BI&usqp=CAUhttps://m.media-amazon.com/images/I/81iPfppO1+L.jpghttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Firon-man-3-movie-poster--843369467742129923%2F&psig=AOvVaw1dPP6-TyzDzbfJS6tF5CO_&ust=1728213411067000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjkrvzkjveIAxXCTmwGHbJhFnoQjRx6BAgAEBg",
        rating: 9
    },
    {
        name: "Thor 2",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vDR5Xmfr0YJdNYqfWwn9Di9cNopRqbhWNwjOncFmUIQgf8ewN_UQrpWw-wTU3MvYT5s&usqp=CAU",
        rating: 9
    },
    {
        name: "Captain America and the winter soldier",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05iisjVbi3iaIsGjGdXPMmQ63Nj3RDquva94HfVnhkcw3dLv6CUfp-Ny66YewQMdqY5U&usqp=CAU",
        rating: 10
    },
    {
        name: "Guardian of the galaxy",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4EQ3kNrPWZbCRjHyglSRshHz4g9pKv_2FWJgIn_xbYQ4RZlJEgI6Hv0f_CEOVoiI_Gs&usqp=CAU",
        rating: 9
    },
    {
        name: "Avengers age of ultron",
        poster: "https://m.media-amazon.com/images/I/81mmNk1-LbL._AC_UF1000,1000_QL80_.jpg",
        rating: 10
    },
    {
        name: "Ant Man",
        poster: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_.jpg",
        rating: 10
    },
    {
        name: "Captan america and civil war",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cFeyw8m_v3t_rUEpqgkEc1fSYq2JuJDxa60TDEj4-FzxRwRfewPxHOOPP_z6SApVMc0&usqp=CAU",
        rating: 10
    },
    {
        name: "Doctor Strange",
        poster: "https://m.media-amazon.com/images/I/81rHrwZLHoL._AC_UF894,1000_QL80_.jpg",
        rating: 9
    },
    {
        name: "Guardian of the galaxy vol 2",
        poster: "https://m.media-amazon.com/images/I/71yocQo-bkL._AC_UF894,1000_QL80_.jpg",
        rating: 9
    },
    {
        name: "Spide man homecoming",
        poster: "https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_FMjpg_UX1000_.jpg",
        rating: 9
    },
    {
        name: "Thor Ragnorok",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPo_g8ir9ncAVCzrxUU2dh_z4dasEW9MYtQKb5JzNV8pivhlWUYtq3zbvrG2ZikOHuilY&usqp=CAU",
        rating: 10
    },
    {
        name: "Black Panther",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv07OxeORG3acc8MXXVS89NRg5Jr0VmuD_T4ZGM8g6lz_I_f3SNQZpDN0b6MRHufC5plk&usqp=CAU",
        rating: 10
    },
    {
        name: "Avengers Infinity War",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0cr3cL04hBJ87cNL36vPGddD8QfDJmKGrUi8kYR45mU9dXZcKq9YLcm9yqmtPgtVIsk&usqp=CAU",
        rating:  10
    },
    {
        name: "Ant Man and the Wasp",
        poster: "https://m.media-amazon.com/images/M/MV5BODVkY2ZmZTAtYzFhMi00YzZlLWE2YWMtMDBiYjY2OTU4ZWM0XkEyXkFqcGc@._V1_.jpg",
        rating:  9
    },
    {
        name: "Captain Marvel",
        poster: "https://m.media-amazon.com/images/I/517RVanrY5L._AC_UF894,1000_QL80_.jpg",
        rating:  7
    },
    {
        name: "Avengers Endgame",
        poster: "https://rukminim2.flixcart.com/image/850/1000/jv2p6kw0/poster/y/n/h/medium-endgame3jumbo-avengers-endgame-jumbo-poster-for-room-original-imafgyfvxjzuvkfu.jpeg?q=90&crop=false",
        rating:  10
    }
    
];  

function searchMovie()
{
    let movieName = document.getElementById('search').value;
        if(movieName!=="")
        {
          let result = movies.filter(function(movie)
            {
                return movie.name.toUpperCase().includes(movieName.toUpperCase())
            })  
        if(result.length==0)
        {
            console.log("ERROR");
        }
        displayMovies(result);
        }
        else
        {
            displayMovies(movies);
        }
    
}

function displayMovies(data)
{
    document.getElementById("movies").innerHTML="";
   let htmlString = ``;

   for(let i=0;i<data.length;i++)
   {
        
        htmlString=htmlString+`
         <div class="movie">
                <div class="overlay">
                    <div class="video">

                    </div>
                    <div class="details">
                        <h1>${data[i].name}</h1>
                        <h2>IMDB: ${data[i].rating}</h2>
                        <p>RDJ, GP, JON F</p>
                    </div>
                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
        `
   }
   console.log(htmlString);
   document.getElementById("movies").innerHTML=htmlString;
}
displayMovies(movies);



// let movieDIV = document.createElement("div");
// movieDIV.classList.add("movie");

// let overlayDIV = document.createElement("div");
// overlayDIV.classList.add("overlay")

// movieDIV.appendChild(overlayDIV);

// console.log(movieDIV);