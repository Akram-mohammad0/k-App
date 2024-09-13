import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.description.substring(0, 100)}...</p>
                    {post.imageURL && <img src={post.imageURL} alt={post.title} />}
                    <Link to={`/post/${post.id}`}>Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;