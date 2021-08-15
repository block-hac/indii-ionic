import firebase from 'firebase/app';
import 'firebase/auth';
import { toast } from './toast' 

const config = {
    apiKey: "AIzaSyDNtqzEYjyz90Pnj6cfTaANa_uLx0pH8PE",
    authDomain: "indi-da614.firebaseapp.com",
    databaseURL: "https://indi-da614-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "indi-da614",
    storageBucket: "indi-da614.appspot.com",
    messagingSenderId: "662956774567",
    appId: "1:662956774567:web:35cdae712abce7e9cef782",
    measurementId: "G-J6W8CMV4BH"
}

firebase.initializeApp(config)

export async function checkUserExist(username: string)  {
    const email = `${username}`
    try {
        const res = await firebase.auth().isSignInWithEmailLink(email)
        console.log('*************', res)
    } catch(error) {
        console.log(error)
        return false;
    }
}

export async function loginUser(username: string, password: string) {
    const email = `${username}`
    try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)

    console.log(res)
    return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function registerUser (username: string, password: string) {
    const email = `${username}`
    try {
        checkUserExist(username);        
        // const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        // console.log(res)
        // return true
    } catch(error) {
        console.log(error)
        toast(error.message, 4000)
        return false
    }
}
