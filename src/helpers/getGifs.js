export const getGifs = async (category) => {

    const apiKey = 'mCvyhQ6Pyj4iRIBGV5PM5ZR9LRCAef0D';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${category}`;

    const respuesta = await fetch(url)
    const { data } = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });
    // console.log('gifs :>> ', gifs);
    return gifs;

};