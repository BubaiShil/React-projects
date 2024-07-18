import React from 'react'
import Container from "../Container/Container"
import PostForm from "../Components/PostForm/PostForm"

const AddPost = () => {
    return (
        <div className='py-8'>
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPost
