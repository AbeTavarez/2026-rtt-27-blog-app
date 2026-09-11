import { Link } from "react-router-dom";
import { blogPosts } from "../data/posts";

function BlogsPage() {
  return (
    <div>
      <h2>Blogs Page</h2>

      <div>
        {blogPosts.length > 0 &&
          blogPosts.map((blog) => (
           <Link key={blog.id} to={`/blogs/${blog.slug}`}>
             <div >
              <h3>{blog.title}</h3>
              <img src={blog.imageUrl} alt={blog.title} height={300} />
            </div>
           </Link>
          ))}
      </div>
    </div>
  );
}

export default BlogsPage;
