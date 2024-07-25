import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from "../Button"
import Select from "../Select"
import Input from "../Input"
import RTE from '../RTE'
import service from "../../Appwrite/Config"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


// slug: post?.$id || ""
const PostForm = ({ post }) => {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post && post.$id ? post.$id : "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    })
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    

    const submit = async (data) => {
        try {
            let fileID = null;
    
            // Upload file if present
            if (data.image[0]) {
                const file = await service.upLoadFile(data.image[0]);
                if (file) {
                    fileID = file.$id;
    
                    if (post && post.featuredImg) {
                        await service.deleteFile(post.featuredImg);
                    }
                }
            }
    
            // Handle existing post (update)
            if (post) {
                const updatedPost = await service.updateDocuments(post.$id, {
                    ...data,
                    featuredImg: fileID || post.featuredImg,
                });
    
                if (updatedPost) {
                    navigate(`/post/${updatedPost.$id}`);
                }
            } else {
                // Handle new post (create)
                const createdPost = await service.createDocuments({
                    ...data,
                    featuredImg: fileID || "", // Ensure featuredImg is provided
                    userId: userData.$id // Ensure userID is included
                });
    
                if (createdPost) {
                    navigate(`/post/${createdPost.$id}`);
                }
            }
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };
    
    

 
    // const submit = async (data) => {
    //     if (post) {
    //         const file = data.image[0] ? await service.upLoadFile(data.image[0]) : null
    //         if (file) {
    //             service.deleteFile(post.featuredImg)
    //         }

    //         const dbpost = await service.updateDocuments(post.$id, {
    //             ...data,
    //             featuredImg: file ? file.$id : undefined,
    //         })

    //         if (dbpost) {
    //             navigate(`/post/${dbpost.$id}`)
    //         }
    //     }else{
    //         const file = await service.upLoadFile(data.image[0])

    //         if (file) {
    //             const fileID = file.$id
    //             data.featuredImg = fileID
    //             const dbpost = await service.createDocuments({
    //                 ...data,
    //                 userId: userData.$id,
    //             })
    //             if (dbpost) {
    //                 navigate(`/post/${dbpost.$id}`)
    //             }
    //         }
    //     }

    // }

    const SlugTransform = useCallback((value) =>{
        if (value && typeof value === 'string') 
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

        return ''
        
    },[])



    useEffect(()=>{
        const subscription = watch((value,{name})=>{
            if (name ==='title') {
                setValue('slug',SlugTransform(value.title),{shouldValidate: true})
            }
        })

        return () => subscription.unsubscribe()
        
    },[watch,SlugTransform,setValue])

return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">


                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />


                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", 
                            SlugTransform(e.currentTarget.value), 
                            { shouldValidate: true });
                    }}
                />

                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">


                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.previewFile(post.featuredImg)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}


                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />



                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
)
}

export default PostForm
