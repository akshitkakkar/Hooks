import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [posts, setPosts] = useState({})

    const [id, setId] = useState(1)

    const [idFromBtn, setIdFromBtn] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [idFromBtn])
    
    const handleClick = () => {
        setIdFromBtn(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input>
            <button onClick={handleClick}>Fetch Posts</button>
            <div>{posts.title}</div>
            {/* <ul>
                {
                    posts.map(post=>{
                    return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
