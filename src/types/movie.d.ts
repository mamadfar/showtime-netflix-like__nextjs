interface IResponse<M> {
    Response: string;
    Search: M;
    totalResults: string;
}

interface IMovie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

interface IMovieList extends Pick<IMovie, "Poster" | "Title" | "Type" | "Year" | "imdbID"> {}

type MOVIE_TYPE = "all" | "movie" | "series" | "episode";
