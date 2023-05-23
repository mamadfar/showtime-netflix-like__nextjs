import {Suspense} from "react";
import {getMovieService} from "@/services/getMoviesService";
import {notFound} from "next/navigation";
import {Loading, MovieImage, MovieInfo, MovieTitle} from "@/components";
import {Metadata} from "next";
import {rateColorHandler} from "@/utils/rateColorHandler.util";

interface IMoviePageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({params: {id}}: IMoviePageProps): Promise<Metadata> {
    return {
        title: `Movie No.${id}`,
    };
}

const MovieDetails = async ({params: {id}}: IMoviePageProps): Promise<any> => {

    try {
        const {data: movie} = await getMovieService(id);

        return (
            <Suspense fallback={<Loading/>}>
            <section className="text-white">
                {movie.Title ? (
                    <article className="flex flex-col md:flex-row md:h-96">
                        <div className="relative flex-1 h-full p-32 md:p-0 mb-6 md:mb-0">
                            <MovieImage Title={movie.Title} Poster={movie.Poster} ImgClassName="object-contain"/>
                        </div>
                        <div className="md:flex-[2]">
                            <div className="flex justify-between items-center mb-5">
                                <div className="space-y-3">
                                    <MovieTitle Title={movie.Title} Year={movie.Year}/>
                                </div>
                                <div className="">
                                    <div className="tracking-widest text-center">
                                    <span
                                        className={`font-bold text-lg ${rateColorHandler(Number(movie.imdbRating))}`}>{movie.imdbRating}</span><small>/10</small>
                                        <p className="border-t">{movie.imdbVotes}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <MovieInfo title="Genre" infoType={movie.Genre}/>
                                <MovieInfo title="Director" infoType={movie.Director}/>
                                <MovieInfo title="Writer" infoType={movie.Writer}/>
                                <MovieInfo title="Actors" infoType={movie.Actors}/>
                                <MovieInfo title="Runtime" infoType={movie.Runtime}/>
                                <MovieInfo title="Rated" infoType={movie.Rated}/>
                                <MovieInfo title="Country" infoType={movie.Country}/>
                                <p className="text-sm pt-4 leading-6">{movie.Plot}</p>
                            </div>
                        </div>
                    </article>
                ) : (<h2>Not Found</h2>)}
            </section>
            </Suspense>
        );
    } catch (e) {
        notFound();
    }
};

export default MovieDetails;
