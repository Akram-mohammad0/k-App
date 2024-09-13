import React from 'react';

const BlogPost = ({ post }) => {
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            {post.imageURL && <img src={post.imageURL} alt={post.title} />}
        </div>
    );
};

export default BlogPost;