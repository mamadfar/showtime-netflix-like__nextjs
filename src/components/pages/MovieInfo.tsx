import {FC} from 'react';

interface IMovieInfoProps {
    infoType: string;
    title: string;
    wrapperClassName?: string;
}

const MovieInfo:FC<IMovieInfoProps> = ({infoType, title, wrapperClassName}) => {
    return (
        <div className={wrapperClassName ?? ""}>
            <small className="border-l border-red-600 pl-1"><span className="capitalize">{title}: </span></small><span>{infoType}</span>
        </div>
    );
};

export default MovieInfo;
