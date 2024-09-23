import { Link } from "react-router-dom";

function Postcard({post}){
    return(
        <Link to={`/post/${post.id}`} class="news-card">
            <div class="category">
                <p class="news-card__category">{post.category}</p>
            </div>
            <div class="news-container"> 
                <h3 class="news-card__title">{post.title}</h3>
                <span class="news-card__desc">{post.desc}</span>
            </div>                    
        </Link>
    );
}

export default Postcard;