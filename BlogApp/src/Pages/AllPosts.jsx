import React from 'react'
import { useState, useEffect } from 'react'
import service from '../Appwrite/Config'
import PostCard from '../Components/PostCard'
import Container from '../Container/Container'

const AllPosts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => { }, [])

    service.getDocs([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((posts) => {
                            <div key={posts.$id} className='p-2 w-1/4'>
                                <PostCard posts={posts} />
                            </div>
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
