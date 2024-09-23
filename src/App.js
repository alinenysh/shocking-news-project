import Header from "./components/Header";
import "./assets/css/style.css"
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import PostsbyCategories from "./pages/PostsbyCategories";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/posts/:id" element={<PostsbyCategories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
