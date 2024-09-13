
import React, { useState, useEffect } from 'react';
import BlogList from '../Components/BlogList';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // You can fetch from an API or use static data
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
        setPosts(fetchedPosts);
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <BlogList posts={posts} />
        </div>
    );
};

export default HomePage;