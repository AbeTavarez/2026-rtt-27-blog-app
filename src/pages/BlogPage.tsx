import { useParams } from "react-router-dom";
import { blogPosts } from "../data/posts";


function BlogPage() {
    const {slug} = useParams();
    
    const blog = blogPosts.find(blog => blog.slug === slug);
    
    if (!blog) return <h3>No Post Found!</h3>

    return (
        <div>
            <h2>{blog?.title}</h2>
            <img src={blog.imageUrl} alt="" height={300} />
            <p>{blog?.content}</p>
        </div>
    )
}

export default BlogPage;