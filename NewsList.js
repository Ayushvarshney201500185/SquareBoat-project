import React ,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'

const NewsList = () => {
    const [articles, setArticles]=useState([])

useEffect(()=>{
//  ## 
const getArticles=async()=>{ 
 const response = await axios.get('https://newsapi.org/v2/everything?q=movie&from=2023-05-30&sortBy=publishedAt&apiKey=306ffd82259b4de5874dfa97d4fccbe1');
console.log(response)
setArticles(response.data.articles)
}
getArticles()
},[])

  return (
    <div>
      {articles.map(article=>{
        return(
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
