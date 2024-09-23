import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPost from "../components/LoadingPost";
import axios from "axios";
import Postcard from "../components/Postcard";

function PostsbyCategories() {

    const{id} = useParams();
    const [category, setCategory] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://badd501b5e623e47.mokky.dev/category/${id}`);
                setCategory(response.data);
            } catch (e) {
                console.log(e);
            }
        }

        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://badd501b5e623e47.mokky.dev/post');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchPosts();
        fetchCategory();
    }, [id]);

    return(
        <section class="mobile-block">
            <div class="for-category">{category.name}</div>

            <div class="all-news">
                {isLoading ? (<LoadingPost />) : (
                    <>
                        {posts.map((post) => {
                            return post.category === category.name ? (
                                <Postcard key={post.id} post={post} />
                            ) : null   
                        })}
                    </>
                )}
            </div>
        </section>
    );
}

export default PostsbyCategories;