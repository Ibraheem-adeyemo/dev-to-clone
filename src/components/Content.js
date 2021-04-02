import React, { useEffect, useState} from 'react'
import ArticleComponent from './ArticleComponent'

const Content = () => {

    const [ articles, setArticles] = useState([])

    useEffect(() => {
        setTimeout( async () => {
            const response = await fetch("https://dev.to/api/articles");
            const data = await response.json();

            setArticles(data)
            console.log(data)
        }, 2000);
    }, [])
    return (
        <main className="main-content">
            <header>
                <h1>Posts</h1>
                <nav>
                    <a href="#">
                        Feed
                    </a>
                    <a href="#">
                        Week
                    </a>
                    <a href="#">
                        Month
                    </a>
                    <a href="#">
                        Infinity
                    </a>
                    <a href="#">
                        Latest
                    </a>
                </nav>
            </header>
            <div className="articles">
                {articles && articles.map(
                    (article, index) => {
                        return <ArticleComponent key={index} data={article} />
                    }
                )}
            </div>
        </main>
    )
}

export default Content
