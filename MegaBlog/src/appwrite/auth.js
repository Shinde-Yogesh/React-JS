import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

//creating class for the optimization of code
//when new obj created then the client is created and further new process going on
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    //appwrite services are call here

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                //call anohter method
                return this.login(email, password)

            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }

    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }
        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }
    }
}

const authService = new AuthService();
export default authService