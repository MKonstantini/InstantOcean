import axios from "axios";
import Cruise from "../interfaces/Cruise"
import User from "../interfaces/User";

let api = process.env.REACT_APP_API 

// User Functions
export function userRegister(user: User){
    return(axios.post(`${api}/users`, user) )
    //returns token
}
export function userLogin(email: string, password: string){ 
    return axios.post(`${api}/users/login`, {email: email, password: password}) 
    //returns token
}
export function userDelete(email: string) {
    axios.delete(`${api}/users`, {data: {email: email}})
}
export function userGetUserInfo(token: string){
    return axios.get(
        `${api}/users`,
        {headers: {
            "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
        }}
    ) //returns user info obj
}

// Cruise Functions
export function cruiseGetAll(){
    return axios.get(`${api}/cruises`)
}
export function cruisePost(cruise: Cruise){
    axios.post(`${api}/cruises`, cruise)
}
export function cruiseDelete(name: string){
    axios.delete(`${api}/cruises`, {data: {name: name}})
}
export function cruisePatch(name: string, editedCruise: Cruise){
    axios.patch(`${api}/cruises/${name}`, editedCruise)
}