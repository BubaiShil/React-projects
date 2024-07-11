import conf from "../conf.js"
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
}

const service = new DatabaseService()

export default service;