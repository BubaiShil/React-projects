

const conf = {
    appWriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appWritePROJECTid: String(import.meta.env.VITE_APPWRITE_id),
    appWriteDataID: String(import.meta.env.VITE_APPWRITE_dataid),
    appWriteDataCollection: String(import.meta.env.VITE_APPWRITE_datacollection),
    appWriteBucketID: String(import.meta.env.VITE_APPWRITE_bucketid),
    TINYapi: import.meta.env.VITE_APPWRITE_Tiny_Api
}



export default conf