import { useState } from 'react';
import axios from 'axios';

const usePosts = () => {
    const [posts, setPosts] = useState({});

    const getPosts = async () => {
        try {
            const response = await axios.get('/api/posts');
            setPosts(response.data); // Update posts state
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    return { posts, getPosts };
};

export default usePosts;
