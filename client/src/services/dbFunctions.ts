import axios from "axios";
import Cruise from "../interfaces/Cruise"

let api = process.env.REACT_APP_API 

export function getAllCruises(){
    axios.get(`${api}/cruises`).then((res) => console.log(res.data))
} 