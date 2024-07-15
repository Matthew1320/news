import React from 'react'
import './newsitem.css'

const NewsItem = ({title, description, url, urlToImage}) => {
  return (
    <div className='news-app'>
        <div className='news-item'>
            <img className='news-img' src={urlToImage} alt={urlToImage}/>
            <div className='news-item_text'>
              <h3><a rel="noopener noreferrer" href={url} target="_blank">{title}</a></h3>
              <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default NewsItem