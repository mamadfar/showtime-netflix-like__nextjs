import {useEffect, useState} from 'react';
import {getMoviesService} from "@/services/getMoviesService";
import debounce from "@/utils/debounce.util";

const useMovie = () => {

    const [search, setSearch] = useState<string>("");
    const [movieType, setMovieType] = useState<MOVIE_TYPE>("all");
    const [movies, setMovies] = useState<ReadonlyArray<IMovieList>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getMovies = async (query: string, movieType: string, signal: AbortSignal) => {
        try {
            if (query.length > 2) {
                setIsLoading(true);
                const {data, status} = await getMoviesService(query, movieType, signal);
                if (status === 200) {
                    setMovies(data.Search);
                    setIsLoading(false);
                }
            }
        } catch (e) {
            setIsLoading(false);
            return e;
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        if (search) {
            let debounceFn: ReturnType<typeof setTimeout>;
            debounceFn = debounce(() => getMovies(search.toLowerCase(), movieType, controller.signal), 800);
            return () => {
                clearTimeout(debounceFn);
                controller.abort("User canceled the request.")
            }
        } else {
            setMovies([]);
        }
    }, [search, movieType])

    return {search, setSearch, movies, isLoading, movieType, setMovieType};
};

export default useMovie;
