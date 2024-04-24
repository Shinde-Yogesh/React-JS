const conf = {
    appwriteUrl: String(import.meta.env.
        VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.
        VITE_APPWRITE_PROJECT_ID),// here i change the id
    appwriteDatabaseId: String(import.meta.env.
        VITE_APPWRITEE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.
        VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.
        VITE_APPWRITE_BUCKET_ID)
}

export default conf