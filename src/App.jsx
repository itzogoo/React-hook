


import './App.css';
import MovieCard from './Components/MovieCard';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieDescription from "./Components/MovieDescription";
import"./App.css"


const App = () => {

  const [movies, setMovies] = useState([
    {
      title: 'See',
      description: '2022',
      trailerURL: "https://www.youtube.com/embed/7Rg0y7NT1gU?si=kKmawixbwg7qvW5p" ,
      rating: 4.5,
    },
    {
      title: 'Legend of the seeker',
      description: '2017',
      trailerURL: "https://www.youtube.com/embed/96OrBX1epXM?si=RjRvVS9J4wpqR6MA" ,
      rating: 3.8,
    },
    {
      title: 'Merlin',
      description: '2016',
      trailerURL: "https://www.youtube.com/embed/01rxgwVmxx0?si=NUWo3Pscgj4Be83P",
      rating: 5.8,
    },
    {
      title: 'Night agent',
      description: '2021',
      trailerURL: "https://www.youtube.com/embed/YDbnY9Obsfs?si=jGyVn1Wqen9cpwKN",
      rating: 3.3,
    },
    {
      title: 'Mass destruction',
      description: '2012',
      trailerURL: "https://www.youtube.com/embed/w_t7xyxfMSg?si=qmdlMzTYDl6uzraq",
      rating: 3.1,
    },
    {
      title: 'Game of thrones',
      description: '2018',
      trailerURL: "https://www.youtube.com/embed/KPLWWIOCOOQ?si=bHoOFvuQk5nABL7v",
      rating: 3.9,
    },
    {
      title: 'Spider man',
      description: '2019',
      trailerURL: "https://www.youtube.com/embed/g4Hbz2jLxvQ?si=ast8XXa-ktaK8TS5" ,
      rating: 4.8,
    },
    {
      title: 'Top boy',
      description: '2023',
      trailerURL: "https://www.youtube.com/embed/xrqvO46QR2E?si=F7pctXU8AgVgopxg",
      rating: 4.5,
    },

  ])
    
    const [searchText, setSearchText] = useState ("")
    
    
    const filteredMovies = movies?.filter(
      (movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    const handleHome = () => {
      setSearchText("")
    }

    return (
      
      <div>
        <Router path="/movie/:title">
          <MovieDescription
          title={filteredMovies.title}

          description={filteredMovies.description}
            rating={filteredMovies.rating}
            trailerURL={filteredMovies.trailerURL}
            />
        </Router>

       
        <Router path= "/">
          <div>
            <button onClick={handleHome}>Back to Home</button>
          </div>
          <div className='searchForm'>
            <form>
              <input 
                type="text"
                placeholder="Search..." 
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </form>
          </div>
          <div className='grid'>
            {filteredMovies?.map(({id, title, description, trailerURL, rating}) => {
              return (
                <MovieCard
                key={id}
                title={title}
                description={description}
                trailerURL={trailerURL}
                rating={rating}
                ></MovieCard>

              )

            })}

          </div>
        </Router>      
      </div>
    )

  }
      
  


export default App;





