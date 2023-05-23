import Link from "next/link";
import {MovieImage, MovieTitle} from "@/components";

const Movie = ({movie: {Poster, Year, imdbID, Type, Title}}: { movie: IMovieList }) => {
    return (
        <article className="flex h-52 text-white">
            <div className="relative h-full flex-1 mr-4">
                <Link href={`/movie/${imdbID}`}>
                    <MovieImage Title={Title} Poster={Poster} className={`object-contain ${Poster === "N/A" ? "px-2" : ""}`}/>
                </Link>
            </div>
            <div className="flex-1 flex flex-col">
                <MovieTitle Title={Title} Year={Year}/>
                <small className="mt-auto">{Type}</small>
            </div>
        </article>
    );
};

export default Movie;
