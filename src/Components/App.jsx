import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Post from "./Post"
function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            console.log(response.data);
            setPosts(response.data)
            localStorage.setItem('cats', JSON.stringify(response.data));
        })
    }, []);
    return (
    <div>
        {posts.map(item => <Post key={item.id} data={item} >  </Post>)}
    </div>);
    }
    
export default App