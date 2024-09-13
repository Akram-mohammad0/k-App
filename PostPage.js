import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../Components/BlogPost';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchedPosts = [
            {
                id: 1,
                title: 'Post 1',
                description: 'This is the first post',
                imageURL: 'https://via.placeholder.com/150'
            },
            {
                id: 2,
                title: 'Post 2',
                description: 'This is the second post',
                imageURL: 'https://via.placeholder.com/150'
            }
        ];

        const foundPost = fetchedPosts.find((p) => p.id === parseInt(id));
        setPost(foundPost);
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <BlogPost post={post} />
        </div>
    );
};

export default PostPage;