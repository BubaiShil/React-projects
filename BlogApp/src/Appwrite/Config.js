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

    async createDocuments({ title, slug, content, featuredImg, status, userID }) {
        try {
            return await this.Databases.createDocument(
                conf.appWriteDataID,
                conf.appWriteDataCollection,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImg,
                    status,
                    userID,
                }
            )
        } catch (error) {
            throw error
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
            throw error
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
            throw error
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
            throw error
        }
    }


    async getDocs(queries = [Query.equal("status","active")]){
        try {
            return await this.Databases.listDocuments(
                conf.appWriteDataID,
                conf.appWriteDataCollection,
                queries

            )
        } catch (error) {
            throw error
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
            throw error
        }
    }

    async deleteFile(fileID){
        try {
            return await this.Bucket.deleteFile(
                conf.appWriteBucketID,
                fileID
            )
        } catch (error) {
            throw error
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