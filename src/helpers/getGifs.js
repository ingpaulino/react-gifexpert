export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JuVr84VQM2N5rd9NOIxjlKddjhDF9h8i&q=${category}&limit=12`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    return gifs;
  }