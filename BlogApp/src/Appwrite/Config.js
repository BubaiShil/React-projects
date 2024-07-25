import conf from "../conf/conf.js"
import { Client, Databases, ID, Storage, Query } from "appwrite";


export class DatabaseService {

    client = new Client()
    Databases;
    Bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWritePROJECTid)

        this.Databases = new Databases(this.client)

        this.Bucket = new Storage(this.client)
    }

    async createDocuments({ title, slug, content, featuredImg, status, userId }) {
        try {
            return await this.Databases.createDocument(
                conf.appWriteDataID,
                conf.appWriteDataCollection,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }


    async updateDocuments(slug, { title, content, featuredImg, status }) {
        try {
            return await this.Databases.updateDocument(
                conf.appWriteDataID,
                conf.appWriteDataCollection,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }


    async deleteDocuments(slug) {
        try {
            await this.Databases.deleteDocument(
                conf.appWriteDataID,
                conf.appWriteDataCollection,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getDoc(slug){
        try {
            return await this.Databases.getDocument(
                conf.appWriteDataID,
                conf.appWriteDataCollection,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }


    async getDocs(queries = [Query.equal("status","active")]){
        try {
            return await this.Databases.listDocuments(
                conf.appWriteDataID,
                conf.appWriteDataCollection,
                queries,

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    //File SETUP
    async upLoadFile(file){
        try {
            return await this.Bucket.createFile(
                conf.appWriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileID){
        try {
             await this.Bucket.deleteFile(
                conf.appWriteBucketID,
                fileID
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    previewFile(fileID){
        return this.Bucket.getFilePreview(
            conf.appWriteBucketID,
            fileID
        )
    }


}

const service = new DatabaseService()

export default service;