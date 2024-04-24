import React from "react";
import Article from "./Article";

function ArticleList ({posts}){
    const postElement = posts.map(function(post){
        return <Article key={post.id} title={post.title}/>
    });
    
    return (
        <main>
            {postElement}
        </main>
    );
}

export default ArticleList;