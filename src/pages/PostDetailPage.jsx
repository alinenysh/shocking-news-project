import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";
import Error from "../components/Error";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost]=useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://badd501b5e623e47.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPost();
    }, [id]);

    if(isError) {
        return <Error />;
    }

    return(
        <section class="mobile-block">
            {isLoading ? (<LoadingDetail />) : (
                <div class="container">
                    <div class="post-detail-block">
                        <div class="category in-img">
                            <p class="news-card__category">{post.category}</p>
                        </div>
                        <img src={post.ImageURL} alt={post.title} />                
                        <p class="author">Автор поста: <i>{post.author}</i></p>
                        <p class="description">
                            {post.description}
                        </p>
                    </div>
                </div>
            )}

        </section>
    );
}

export default PostDetailPage;