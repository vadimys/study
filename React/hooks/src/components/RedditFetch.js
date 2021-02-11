import {useEffect, useState} from "react";

export default function Reddit() {
    // Initialize state to hold the posts
    const [posts, setPosts] = useState([]);

    // effect functions can't be async, so declare the
    // async function inside the effect, then call it
    useEffect(() => {
        async function fetchData() {
            // Call fetch as usual
            const res = await fetch(
                "https://www.reddit.com/r/reactjs.json"
            );

            // Pull out the data as usual
            const json = await res.json();

            // Save the posts into state
            // (look at the Network tab to see why the path is like this)
            setPosts(json.data.children.map(c => c.data));
        }

        fetchData();
    }, [setPosts]); // <-- we didn't pass a value. what do you think will happen?

    // Render as usual
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
