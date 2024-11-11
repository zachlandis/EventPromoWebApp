import React, { useState, useEffect } from "react";

function Post() {
    const [post, setPost] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/posts/1`)
          .then(response => response.json())
          .then(data => setPost(data.postBody)) 
          .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {post}
        </div>
    )
}

export default Post;