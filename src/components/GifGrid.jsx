import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import loadingImg from '../assets/loading.gif';
export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>Categoría: {category}</h3>
      <div className='card-grid'>
        {
          isLoading && (<img src={loadingImg} width={100} alt="Cargando..." />)
        }
        
        {images.map((image) => (
          <a className="link-card" href={image.url} target='_black'>
            <div className="card">
              <h3>{image.title}</h3>
              <section className="image-card">
                <img key={image.id} src={image.url} alt={image.title} />
              </section>
            </div>
          </a>
        ))
        }
      </div>
    </>
  );
}

GifGrid.PropTypes = {
  category: PropTypes.string.isRequired
}
