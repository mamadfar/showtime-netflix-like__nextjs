import { ImageResponse } from 'next/server';

export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';
export const runtime = 'edge';

export default function icon() {
    return new ImageResponse(
        (
            <img src="favicon.png" alt="Favicon"/>
        ),
        size,
    );
}
