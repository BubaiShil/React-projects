import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Button from "../Button"
import Logo from '../Logo'
import Input from "../Input"
import RTE from '../RTE'
import service from '../../Appwrite/Config'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const PostForm = ({ post }) => {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    })
    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? service.upLoadFile(data.image[0]) : null
            if (file) {
                service.deleteFile(post.featuredImg)
            }

            const dbpost = await service.updateDocuments(post.$id, {
                ...data,
                featuredImg: file ? file.$id : undefined,
            })

            if (dbpost) {
                navigate(`/post/${dbpost.$id}`)
            }
        }else{
            const file = await service.upLoadFile(data.image[0])

            if (file) {
                const fileID = file.$id
                data.featuredImg = fileID
                const dbpost = await service.createDocuments({
                    ...data,
                    userId: userData.$id,
                })
                if (dbpost) {
                    navigate(`/post/${dbpost.$id}`)
                }
            }
        }

    }



return (
    <div>

    </div>
)
}

export default PostForm
