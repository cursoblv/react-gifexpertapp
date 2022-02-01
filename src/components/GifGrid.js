import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);


    // if (category.length > 2) {
    //     getGifs();
    // }


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p>Loading</p>}
            <div className='card-grid animate__animated animate__flash'>
                {images.map(img => <GifGridItem key={img.id} {...img} />)}
            </div>
        </>
    );
};

