import React, { useState, useEffect } from 'react';
import '../index.css'


function PostList() {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/posts/`)
            .then(response => response.json())
            .then(data => setAllPosts(data))  
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const listOfPosts = allPosts.map((post, index) => (
        <div 
            key={index}
            className="postDiv"
        >
                <p>{post.postBody}</p>
        </div>
    ));

    return (
        <div>
            {listOfPosts}
        </div>
    );
}

export default PostList;
