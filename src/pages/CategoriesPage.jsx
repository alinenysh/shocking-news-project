import globe from "../assets/image/globe.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingRow from "../components/LoadingRow";
import Error from "../components/Error";

function CategoriesPage() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://badd501b5e623e47.mokky.dev/category');
                setCategories(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);

    if(isError) {
        return <Error />;
    }

    return(
        <section class="mobile-block is-blue">
            {isLoading ? (<LoadingRow />) : (
                <div class="container">
                    <div class="category-row">
                        <Link to="/" class="category-item">
                            <img src={globe} alt="globe" />
                            <div class="containercat">
                                <span class="category-item__title">All news</span>
                            </div>                       
                        </Link>
                        {categories.map((category) => (
                            <Link to={`/category/posts/${category.id}`} class="category-item">
                                <img src={category.imageURL} alt={category.name}/>
                                <div class="containercat">
                                    <span class="category-item__title">{category.name}</span>
                                </div>                        
                            </Link>
                        ))}
                    </div>
                </div>
            )}
            
        </section>
    );
}

export default CategoriesPage;