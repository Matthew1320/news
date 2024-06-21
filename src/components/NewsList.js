import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = ({category}) => {
    const [articles, setArticles] = useState([])
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category='.concat(Object.values({category})[0],'&apiKey=89dccbf3b5894bab8119151b35820686')
    console.log(Object.values({category}),url)

    useEffect(() => {
        const getArticles = async () => {
            const response = axios.get(url)
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