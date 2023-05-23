import {FC} from 'react';

const MovieTitle:FC<Pick<IMovieList, "Title" | "Year">> = ({Title, Year}) => {
    return (
        <h2><span className="text-lg">{Title}</span><small> ({Year})</small></h2>
    );
};

export default MovieTitle;
