import {FC} from 'react';

interface IFilterProps {
    movieType: MOVIE_TYPE;
    setMovieType: (movieType: MOVIE_TYPE) => void;
}

const Filter:FC<IFilterProps> = ({setMovieType, movieType}) => {
    return (
        <select name="movieType" id="movieType" onChange={e => setMovieType(e.target.value as MOVIE_TYPE)}
                className="text-black rounded-r-sm z-10 capitalize">
            <option value="all">all</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
        </select>
    );
};

export default Filter;
