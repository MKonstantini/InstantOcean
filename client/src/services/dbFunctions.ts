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
export function userPatchFavorites(token: string, favArr: number[]){
    return axios.patch(
        `${api}/users`, {favorites: favArr},
        {headers: {
            "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
        }}
    ) //returns favorites array
}

// Cruise Functions
export function cruiseGetAll(){
    return axios.get(`${api}/cruises`)
}
export function cruisePost(cruise: Cruise){
    return axios.post(`${api}/cruises`, cruise)
}
export function cruiseDelete(cruiseNum: number){
    return axios.delete(`${api}/cruises`, {data: {cruiseNum: cruiseNum}})
}
export function cruisePatch(editedCruise: Cruise){
    return axios.patch(`${api}/cruises`, editedCruise)
}