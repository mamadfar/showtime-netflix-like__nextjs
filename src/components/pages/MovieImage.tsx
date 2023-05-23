import {FC} from 'react';
import placeholder from "@/assets/img/image-placeholder.png";
import Image from "next/image";

interface IMovieImageProps extends Pick<IMovie, "Poster" | "Title">{
    fill?: boolean;
    ImgClassName?: string;
}

const MovieImage: FC<IMovieImageProps> = ({Poster, Title, ImgClassName, fill=true}) => {
    return (
        <>
            {fill ? (
                <Image src={Poster.includes("http") ? Poster : placeholder} alt={Title} fill className={ImgClassName}/>
            ) : (
                <Image src={Poster.includes("http") ? Poster : placeholder} alt={Title} width={200} height={200} className={ImgClassName}/>
            )}
        </>
    );
};

export default MovieImage;
