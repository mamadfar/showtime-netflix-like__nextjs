"use client";

import {Suspense} from "react";
import {Search, Movie, Loading, Filter} from "@/components";
import useMovie from "@/hooks/useMovie";

const Home = () => {

    const {search, setSearch, movies, isLoading, setMovieType, movieType} = useMovie();

    return (
        <section className="flex flex-col justify-center">
            <div className="flex">
                <Search search={search} setSearch={setSearch}/>
                <Filter movieType={movieType} setMovieType={setMovieType}/>
            </div>
            <Suspense fallback={<Loading/>}>
                <section className="mt-8">
                    {!isLoading ? (
                        <>
                            {(movies && movies.length) ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-8">
                                    {movies.map(movie => (
                                        <Movie key={movie.imdbID} movie={movie}/>
                                    ))}
                                </div>
                            ) : (
                                <div className="h-96 flex justify-center items-center">
                                    {(search.length > 2 && !isLoading) ? (
                                        <h2 className="text-white text-4xl">Ops!</h2>
                                    ) : (
                                        <h2 className="text-white text-4xl capitalize">Search for your favorite movie
                                            🎬</h2>
                                    )}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="h-96 flex justify-center items-center">
                            <Loading/>
                        </div>
                    )}
                </section>
            </Suspense>
        </section>
    )
};

export default Home;
