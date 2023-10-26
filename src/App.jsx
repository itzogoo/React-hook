


import './App.css';
import MovieCard from './Components/MovieCard';
import { useState } from 'react';


const App = () => {

  const [movies, setMovies] = useState()
  const [ movieData, setMoviesData] = useState()

    const staticMovieData = [ 
      {
        title: 'See',
        description: '2022',
        posterURL: 'public/SEE.jpeg',
        rating: 4.5,
      },
      {
        title: 'Legend of the seeker',
        description: '2017',
        posterURL: 'public/LoS.jpeg',
        rating: 3.8,
      },
      {
        title: 'Merlin',
        description: '2016',
        posterURL: 'public/MERLIN.jpeg',
        rating: 5.8,
      },
      {
        title: 'Night agent',
        description: '2021',
        posterURL: 'public/Na.jpeg',
        rating: 3.3,
      },
      {
        title: 'Mass destruction',
        description: '2012',
        posterURL: 'public/MD.jpeg',
        rating: 3.1,
      },
      {
        title: 'Game of thrones',
        description: '2018',
        posterURL: 'public/gOt.jpeg',
        rating: 3.9,
      },
      {
        title: 'Spider man',
        description: '2019',
        posterURL: 'public/SPIDER MAN.jpeg',
        rating: 4.8,
      },
      {
        title: 'Top boy',
        description: '2023',
        posterURL: 'public/TP.jpeg',
        rating: 4.5,
      },
    
      // Add more movie objects as needed
    ]
    
    const [searchText, setSearchText] = useState ("")
    
    
    const filteredMovies = movies?.filter(
      ({movie}) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    
    const handleSearch = (event) => {
      event.PreventDefault();
      setMoviesData(filteredMovies);
    };

    console.log("all data", filteredMovies );
    
      return (
        <>
        <div className=''>
          <form>
            <input 
              type="text"
              placeholder="Search..." 
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
            <button type="type" onClick={handleSearch}>Search</button>
          </form>
        </div>
        <div className='grid'>
          {staticMovieData?.map(({id, title, description, posterURL, rating}) => {
            return (
              <MovieCard
              key={id}
              title={title}
              description={description}
              posterURL={posterURL}
              rating={rating}
              />
            )
          })}
        </div>
        </>
      );
  }


export default App;





