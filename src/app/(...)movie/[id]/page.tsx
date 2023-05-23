"use client";

import {useCallback, useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {Dialog} from "@headlessui/react";
import {getMovieService} from "@/services/getMoviesService";
import {MovieImage, MovieInfo, MovieTitle} from "@/components";

//? Handle rate color
const rateColorHandler = (rate: number) => {
    if (rate > 6) return "text-green-600"
    if (rate < 6 && rate > 4.5) return "text-yellow-500"
    return "text-red-600"
}

const Modal = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [movie, setMovie] = useState<IMovie>();

    const {id} = useParams();
    const router = useRouter();

    const handleOnClose = () => {
        setIsOpen(false);
        router.back();
    };

    const getMovie = useCallback(async () => {
        try {
            const {data} = await getMovieService(id);
            setMovie(data);
        } catch (e) {
            return e;
        }
    }, [])

    useEffect(() => {
        getMovie();
    }, [id])

    return (
        <Dialog
            open={isOpen}
            onClose={handleOnClose}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/40" aria-hidden="true"/>
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto max-w-3xl rounded bg-gray-700/30 p-10">
                        {movie && (
                            <article className="flex flex-col md:flex-row md:h-full">
                                <div className="relative flex-1 flex h-full p-2 sm:p-16 md:p-0 mb-6 md:mb-0">
                                    <MovieImage Title={movie.Title} Poster={movie.Poster} fill={false} ImgClassName="object-contain flex-1 p-2"/>
                                </div>
                                <div className="md:flex-[2]">
                                    <div>
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
                                    </div>
                                    <div className="space-y-3">
                                        <MovieInfo title="Genre" infoType={movie.Genre}/>
                                        <MovieInfo title="Director" infoType={movie.Director}/>
                                        <MovieInfo title="Actors" infoType={movie.Actors}/>
                                        <MovieInfo title="Runtime" infoType={movie.Runtime}/>
                                        <p className="text-sm pt-4 leading-6">{movie.Plot}</p>
                                        <div className="text-right">
                                            <button
                                                onClick={() => window.location.reload()}
                                                className="text-sm border border-gray-500 rounded-md py-2 px-3 w-fit mx-auto hover:bg-gray-400 hover:text-gray-100 transition delay-75">
                                                More Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )}
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
};

export default Modal;
