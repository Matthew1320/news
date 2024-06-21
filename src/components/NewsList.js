import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=89dccbf3b5894bab8119151b35820686')
            console.log(response)
            setArticles((await response).data.articles)
        }
        getArticles()
    },[])

    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default NewsList