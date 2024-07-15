import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = ({type,category}) => {
    const [articles, setArticles] = useState([])
    let url = 'https://newsapi.org/v2/top-headlines?'.concat(Object.values({type})[0],Object.values({category})[0],'&pageSize=100&apiKey=89dccbf3b5894bab8119151b35820686')
    console.log(url)

    useEffect(() => {
        const getArticles = async () => {
            const response = axios.get(url)
            console.log(response)
            setArticles((await response).data.articles)
        }
        getArticles()
    },[url])

    return (
        <div>
            {articles.map(article => {
                if (article.title !== 
                    "[Removed]" && article.urlToImage !== null){
                return (
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )}
                else {
                    return <></>
                }
            })}
        </div>
    )
}

export default NewsList
