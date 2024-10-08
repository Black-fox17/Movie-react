import {React,useEffect,useState} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=eafee562'

const Movie1 = {
    "Poster" : "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
    "Title": "Superman, Spiderman or Batman",
    "Type": "movie",
    "Year": "2011",
    "imdbID": "tt2084949"
}
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSeachTerm] = useState('');
    const seachMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {

        seachMovies('Spiderman');
    },[])
    return(
        <div className = "app">
            <h1>MovieLand</h1>

            <div className = "search">
                <input
                placeholder = "Seach for movies"
                value = {searchTerm}
                onChange ={(e) => setSeachTerm(e.targetvalue)}
                />
                <img
                    src = {SearchIcon}
                    alt = "search"
                    onClick = {() => seachMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                    ))}
                </div>
                ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
                )}
        </div>
    );
}
export default App