import conf from "../conf.js"
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteURL)
        .setProject(conf.appWritePROJECTid)

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const USERaccount= await this.account.create(ID.unique(),email,password,name)
            if(USERaccount){
               return  this.Login({email,password})
            }else{
                return USERaccount;
            }
        } catch (error) {
            throw error
        }
    }


    async Login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get()
        } catch (error) {
            throw error
        }
        return null;
    }

    async LogOut(){
        try {
             await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService()


export default authService;
