import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import service from '../Appwrite/Config'
import PostForm from '../Components/PostForm/PostForm'
import Container from '../Container/Container'
import { useParams } from 'react-router-dom'

const EditPost = () => {


    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getDoc(slug).then((post) => {
                setPost(post)
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])



    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
